import React, { useEffect, useState } from "react";
import styles from "../styles/message.module.css";
import {
  API,
  Auth,
  withSSRContext,
  graphqlOperation,
  DataStore,
} from "aws-amplify";
import { listMessages } from "../graphql/queries";
import { createMessage } from "../graphql/mutations";
import Message from "./components/messaging/Message";
import { onCreateMessage } from "../graphql/subscriptions";
import InputEmoji from "react-input-emoji";
import { Post, Group } from "@/src/models";
import { Storage } from "@aws-amplify/storage";
import { BiGlobe } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlinePlusCircle,
  AiOutlineUser,
  AiOutlineUserAdd,
  AiTwotonePhone,
} from "react-icons/ai";
import { FiMail, FiSettings } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import AllFilesBySession from "./components/messaging/AllFilesBySession";
import Form from "react-bootstrap/Form";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { BsBag } from "react-icons/bs";
import { useRouter } from "next/router";
import { MdDelete } from "react-icons/md";
import Modal from "react-bootstrap/Modal";

function Messaging({ messages }) {
  const [stateMessages, setStateMessages] = useState([...messages]);
  const [messageText, setMessageText] = useState("");
  const [currUserData, setCurrUserData] = useState();
  const [user, setUser] = useState(null);
  const [allUsersData, setAllUsersData] = useState();
  const [selectedUser, setSelectedUser] = useState("");
  const [file, setFile] = useState({ fileVal: "", isFile: false }); //input file when sending message
  const [darkMode, setDarkMode] = useState(false);
  const [sideBarItem, setSideBarItem] = useState("Chats");
  const [groupData, setGroupData] = useState([]); //input group while creating group
  const [groupName, setGroupName] = useState(""); // input name while creating group
  const [getGroupsData, setGetGroupsData] = useState(); // all groups while reading
  const [selectedGroup, setSelectedGroup] = useState("");
  const [searchChat, setSearchChat] = useState(""); // activate search when changed
  const [groupImg, setGroupImg] = useState(); //input group img while creating group
  const [searchInput, setSearchInput] = useState(""); // search input value handler
  const [show, setShow] = useState(false);
  const [newMember, setNewMember] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => {
    let arr = [];
    allUsersData.map((user) => {
      let flag = false;
      selectedGroup.groupData.map((grp) => {
        if (user.userid === grp.userid) flag = true;
      });
      if (flag === false) arr.push(user);
    });
    setNewMember(arr);
    console.log(newMember);
    setShow(true);
  };

  // function handleOnEnter(text) {
  //   console.log("enter", text);
  // }
  const router = useRouter();
  const getGroupsFunc = async () => {
    try {
      let grpArr = await DataStore.query(Group);

      if (grpArr.length === 0) {
        setGetGroupsData();
      } else {
        grpArr.map(async (item) => {
          const grp = await DataStore.query(Group, (c) =>
            c.session.eq(item.session)
          );
          let groupImg = await Storage.get(item.session);
          try {
            const update = await DataStore.save(
              Group.copyOf(grp[0], (updated) => {
                updated.groupImgUrl = groupImg;
              })
            );
          } catch (err) {
            // toast.error(err, {
            //   position: toast.POSITION.BOTTOM_CENTER,
            // });
            console.log("Error", err);
          }
        });
        grpArr = await DataStore.query(Group);
        grpArr.sort((a, b) => a.groupName.localeCompare(b.groupName));
        // console.log("grpArrr",grpArr)
        setGetGroupsData(grpArr);
        console.log(getGroupsData);
      }
    } catch (err) {
      console.log("Error Getting Groups");
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const amplifyUser = await Auth.currentAuthenticatedUser();
        setUser(amplifyUser);
        try {
          let posts = await DataStore.query(Post);
          if (posts.length !== 0) {
            posts.map(async (item) => {
              const original = await DataStore.query(Post, (c) =>
                c.userid.eq(item.userid)
              );

              let imgUrl = await Storage.get(item.userid);
              try {
                const update = await DataStore.save(
                  Post.copyOf(original[0], (updated) => {
                    updated.imgUrl = imgUrl;
                  })
                );

                if (item.userid === amplifyUser.username) setCurrUserData(item);
              } catch (err) {
                // toast.error(err, {
                //   position: toast.POSITION.BOTTOM_CENTER,
                // });
                console.log("Error", err);
              }
            });
            posts = await DataStore.query(Post);
            posts.sort((a, b) => a.name.localeCompare(b.name));
            setSelectedUser(
              posts[0].userid === amplifyUser.username ? posts[1] : posts[0]
            );
            getGroupsFunc();
          }
          setAllUsersData(posts);

          console.log("Posts retrieved successfully!");
        } catch (error) {
          console.log("Error retrieving posts", error);
        }
      } catch (err) {
        console.log(err);
        setUser(null);
      }
    };

    fetchUser();

    // Subscribe to creation of message
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: ({ provider, value }) => {
        // console.log(value.data.onCreateMessage);

        setStateMessages((stateMessages) => [
          ...stateMessages,
          value.data.onCreateMessage,
        ]);
      },
      error: (error) => console.warn(error),
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    async function getMessages() {
      try {
        const messagesReq = await API.graphql({
          query: listMessages,
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        setStateMessages([...messagesReq.data.listMessages.items]);
      } catch (error) {
        console.error(error);
      }
    }
    getMessages();
  }, [user]);

  const handleSubmit = async (event) => {
    // Prevent the page from reloading
    event.preventDefault();
    let input;
    // clear the textbox
    if (file.fileVal !== "" && file.isFile === true) {
      const random = Math.random().toString(36).substring(2, 7);
      console.log(random, file.fileVal[0]);
      try {
        let imgPromise = await Storage.put(
          `${file.fileVal[0].name}-${random}`,
          file.fileVal[0],
          {
            contentType: file.fileVal[0].type,
          }
        );
        console.log("saved", imgPromise);
      } catch (err) {
        console.log(err);
      }
      if (selectedUser !== "") {
        input = {
          // id is auto populated by AWS Amplify
          message: `${file.fileVal[0].name}-${random}`, // the message content the user submitted (from state)
          owner: user.username,
          messageType: file.fileVal[0].type,
          session: `${user.username}-${selectedUser.userid}`, // this is the username of the current user
        };
      } else {
        input = {
          // id is auto populated by AWS Amplify
          message: `${file.fileVal[0].name}-${random}`, // the message content the user submitted (from state)
          owner: user.username,
          messageType: file.fileVal[0].type,
          session: `${selectedGroup.session}`, // this is the username of the current user
        };
      }
    } else {
      if (selectedUser !== "")
        input = {
          // id is auto populated by AWS Amplify
          message: messageText, // the message content the user submitted (from state)
          owner: user.username,
          messageType: "text",
          session: `${user.username}-${selectedUser.userid}`, // this is the username of the current user
        };
      else {
        input = {
          // id is auto populated by AWS Amplify
          message: messageText, // the message content the user submitted (from state)
          owner: user.username,
          messageType: "text",
          session: `${selectedGroup.session}`, // this is the username of the current user
        };
      }
    }

    // Try make the mutation to graphql API
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: createMessage,
        variables: {
          input: input,
        },
      });
      setMessageText("");
      setFile({ fileVal: "", isFile: false });
    } catch (err) {
      console.error(err);
    }
  };
  const sortUserMessages = async (userChat) => {
    setSelectedUser(userChat);
    setSelectedGroup("");
  };
  const sortGroupMessages = async (grpitem) => {
    setSelectedGroup(grpitem);
    setSelectedUser("");
  };
  const fetchGroupsData = async () => {
    try {
      let grpArr = await DataStore.query(Group);
      setGetGroupsData(grpArr);
    } catch (err) {
      console.log("Error Getting Groups");
    }
  };
  const checkGroupUser = (checkBox, userChat) => {
    let obj = { userid: userChat.userid, name: userChat.name };
    if (checkBox === true) {
      let arr = groupData;
      arr.push(obj);
      setGroupData(arr);
    } else {
      console.log(groupData.length);
      if (groupData.length === 1) setGroupData([]);
      else
        setGroupData(
          groupData.filter((item) => {
            return item.userid !== userChat.userid;
          })
        );
    }
    console.log(groupData);
  };
  const createGroup = async () => {
    if (groupData.length === 0) {
      alert("Select users");
    }
    if (groupName === "") {
      alert("Enter group name");
    }
    if (!groupImg) {
      alert("Add group Photo");
    }
    if (groupData.length > 0 && groupName !== "" && groupImg) {
      console.log(groupData, groupName);
      let obj = { userid: user.username, name: currUserData.name };
      setGroupData(groupData.push(obj));

      const random = Math.random().toString(36).substring(2, 10);
      console.log(groupImg);
      let imgPromise = await Storage.put(random, groupImg[0], {
        contentType: groupImg[0].type,
      });
      try {
        let getGroupImg = await Storage.get(random);
        await DataStore.save(
          new Group({
            groupName: groupName,
            groupData: groupData,
            session: random,
            groupImgUrl: getGroupImg,
          })
        );
        setGroupData([]);
        setGroupName("");
        fetchGroupsData();
        setSideBarItem("Chats");

        setGroupImg();
        // toast.success("Group Created Successfully", {
        //   position: toast.POSITION.BOTTOM_CENTER,
        // });
      } catch (error) {
        // toast.error(err, {
        //   position: toast.POSITION.BOTTOM_CENTER,
        // });
        console.log("Error Creating Group", error);
      }
    }
  };
  const deleteGroup = async (grpId) => {
    await DataStore.delete(Group, (grp) => grp.session.eq(grpId));

    let posts = await DataStore.query(Post);
    getGroupsFunc();
    setSelectedGroup();
    setSelectedUser(
      posts[0].userid === currUserData.userid ? posts[1] : posts[0]
    );
    alert("Group Deleted");
  };
  const deleteMember = async (member) => {
    console.log(member);
    const original = await DataStore.query(Group, (c) =>
      c.session.eq(selectedGroup.session)
    );
    // let newGroupData = original[0].groupData.filter((item)=>item.userid!==member.userid)
    let newGroupData = original[0].groupData.filter(function (item) {
      return item.userid !== member.userid;
    });
    console.log(newGroupData);
    try {
      const update = await DataStore.save(
        Group.copyOf(original[0], (updated) => {
          updated.groupData = newGroupData;
        })
      );
      console.log("Updated Succesfully", update);
      setSelectedGroup(update);
      fetchGroupsData();
    } catch (err) {
      console.log("Error Deleting Member", err);
    }
  };
  const submitNewMember = async () => {
    const original = await DataStore.query(Group, (c) =>
      c.session.eq(selectedGroup.session)
    );
    // let newGroupData = original[0].groupData.filter((item)=>item.userid!==member.userid)
    let newGroupData = [];
    original[0].groupData.map((item) => {
      newGroupData.push(item);
    });
    newGroupData.push({ userid: newMember[0].userid, name: newMember[0].name });

    try {
      const update = await DataStore.save(
        Group.copyOf(original[0], (updated) => {
          updated.groupData = newGroupData;
        })
      );
      console.log("Updated Succesfully", update);
      setSelectedGroup(update);
      fetchGroupsData();
      setGroupData([]);
    } catch (err) {
      console.log("Error Deleting Member", err);
    }
  };
  if (user) {
    return (
      <>
        {currUserData ? (
          <div
            className={styles.navbar}
            style={{
              backgroundColor: darkMode === true ? "#293144" : "white",
              color: darkMode === true ? "white" : "black",
            }}
          >
            <div className={styles.wship}>WShip Messenger</div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <div className={styles.dark}>Dark Mode</div>
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={darkMode}
                onChange={(e) => {
                  darkMode === false ? setDarkMode(true) : setDarkMode(false);
                }}
                style={{ marginRight: "20px" }}
              />
              <Button className={styles.invite}>Invite friends</Button>
              <IoMdNotificationsOutline style={{ fontSize: "30px" }} />
              <img
                width="40px"
                style={{ borderRadius: "50%", aspectRatio: 1 }}
                src={currUserData.imgUrl}
                alt=""
              />
              <div className={styles.userLoggedin}>{currUserData.name}</div>
            </div>
          </div>
        ) : null}
        <div style={{ display: "flex" }}>
          <div
            className={styles.sidebar}
            style={{
              background: darkMode === false ? "white" : "#232A3B",
              color: darkMode === false ? "black" : "white",
            }}
          >
            <OverlayTrigger
              placement="right"
              delay={{ show: 50, hide: 50 }}
              overlay={
                <div style={{ color: darkMode === true ? "white" : "black" }}>
                  Chats
                </div>
              }
            >
              <Button
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: sideBarItem === "Chats" ? "#3a8df5" : "inherit",
                }}
                className={styles.icons}
              >
                <AiOutlineMail
                  onClick={() => setSideBarItem("Chats")}
                  size="25px"
                />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              delay={{ show: 50, hide: 50 }}
              overlay={
                <div style={{ color: darkMode === true ? "white" : "black" }}>
                  Groups
                </div>
              }
            >
              <Button
                style={{
                  margin: 0,
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: sideBarItem === "Groups" ? "#3a8df5" : "inherit",
                }}
                className={styles.icons}
              >
                <HiUserGroup
                  onClick={() => {
                    setSideBarItem("Groups");
                    setSearchInput("");
                  }}
                  size="25px"
                />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              delay={{ show: 50, hide: 50 }}
              overlay={
                <div style={{ color: darkMode === true ? "white" : "black" }}>
                  Profile
                </div>
              }
            >
              <Button
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "inherit",
                }}
                className={styles.icons}
              >
                <AiOutlineUser onClick={() => router.push("/")} size="25px" />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              delay={{ show: 50, hide: 50 }}
              overlay={
                <div style={{ color: darkMode === true ? "white" : "black" }}>
                  Login
                </div>
              }
            >
              <Button
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "inherit",
                }}
                className={styles.icons}
              >
                <BsBag onClick={() => router.push("/")} size="25px" />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              delay={{ show: 50, hide: 50 }}
              overlay={
                <div style={{ color: darkMode === true ? "white" : "black" }}>
                  Register
                </div>
              }
            >
              <Button
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "inherit",
                }}
                className={styles.icons}
              >
                <AiOutlineUserAdd
                  onClick={() => router.push("/")}
                  size="25px"
                />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              delay={{ show: 50, hide: 50 }}
              overlay={
                <div style={{ color: darkMode === true ? "white" : "black" }}>
                  Settings
                </div>
              }
            >
              <Button
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "inherit",
                }}
                className={styles.icons}
              >
                <FiSettings onClick={() => router.push("/")} size="25px" />
              </Button>
            </OverlayTrigger>
          </div>
          <div
            className={styles.background}
            style={{
              background:
                darkMode === true
                  ? "#293144"
                  : "linear-gradient(0deg, #fff, #eae6ff 100%)",
              color: darkMode === true ? "white" : "black",
            }}
          >
            {sideBarItem === "Chats" ? (
              <div
                className={
                  darkMode === true
                    ? styles.userContainerDark
                    : styles.userContainer
                }
              >
                <h4 style={{ margin: "3px" }}>Chats</h4>
                <Form.Control
                  type="text"
                  style={{ marginTop: "10px" }}
                  value={searchInput}
                  placeholder="Search Chats"
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    setSearchChat(
                      allUsersData.filter((item) =>
                        item.name
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase())
                      )
                    );
                  }}
                />
                <h5 style={{ marginTop: "25px" }}>Recent Chats</h5>
                {searchChat
                  ? searchChat.map((userChat, index) =>
                      userChat.userid !== user.username ? (
                        <div
                          key={index}
                          className={
                            darkMode === true
                              ? selectedUser.userid === userChat.userid
                                ? styles.chatHeaderSelected
                                : styles.chatHeaderDark
                              : styles.chatHeader
                          }
                          style={{
                            backgroundColor:
                              selectedUser.userid === userChat.userid
                                ? "#3a8df5"
                                : "inherit",
                            color:
                              selectedUser.userid === userChat.userid
                                ? "white"
                                : "inherit",
                          }}
                          onClick={() => {
                            sortUserMessages(userChat);
                          }}
                        >
                          <img
                            width="15%"
                            style={{ aspectRatio: "1" }}
                            className={styles.profile}
                            src={
                              userChat.imgUrl
                                ? userChat.imgUrl
                                : "profile-1.jpg"
                            }
                            alt=""
                          />
                          <div className={styles.chatName}>{userChat.name}</div>
                        </div>
                      ) : null
                    )
                  : allUsersData?.map((userChat, index) =>
                      userChat.userid !== user.username ? (
                        <div
                          key={index}
                          className={
                            darkMode === true
                              ? selectedUser.userid === userChat.userid
                                ? styles.chatHeaderSelected
                                : styles.chatHeaderDark
                              : styles.chatHeader
                          }
                          style={{
                            backgroundColor:
                              selectedUser.userid === userChat.userid
                                ? "#3a8df5"
                                : "inherit",
                            color:
                              selectedUser.userid === userChat.userid
                                ? "white"
                                : "inherit",
                          }}
                          onClick={() => {
                            sortUserMessages(userChat);
                          }}
                        >
                          <img
                            width="15%"
                            style={{ aspectRatio: "1" }}
                            className={styles.profile}
                            src={
                              userChat.imgUrl
                                ? userChat.imgUrl
                                : "profile-1.jpg"
                            }
                            alt=""
                          />
                          <div className={styles.chatName}>{userChat.name}</div>
                        </div>
                      ) : null
                    )}
                {getGroupsData?.map((grpItem, index) =>
                  grpItem.groupData
                    .map((item) => item.userid === user.username)
                    .indexOf(true) !== -1 ? (
                    <div
                      key={index}
                      className={
                        darkMode === true
                          ? selectedGroup?.session === grpItem.session
                            ? styles.chatHeaderSelected
                            : styles.chatHeaderDark
                          : styles.chatHeader
                      }
                      style={{
                        border: "1px solid grey",
                        backgroundColor:
                          selectedGroup?.session === grpItem.session
                            ? "#3a8df5"
                            : "inherit",
                        color:
                          selectedGroup?.session === grpItem.session
                            ? "white"
                            : "inherit",
                      }}
                      onClick={() => {
                        sortGroupMessages(grpItem);
                      }}
                    >
                      <img
                        width="15%"
                        style={{ aspectRatio: "1" }}
                        className={styles.profile}
                        src={
                          grpItem.groupImgUrl
                            ? grpItem.groupImgUrl
                            : "profile-1.jpg"
                        }
                        alt=""
                      />
                      <div className={styles.chatName}>{grpItem.groupName}</div>
                    </div>
                  ) : null
                )}
              </div>
            ) : (
              <div
                className={
                  darkMode === true
                    ? styles.userContainerDark
                    : styles.userContainer
                }
              >
                <h2 style={{ textAlign: "center" }}>Select users</h2>
                <Form.Control
                  type="text"
                  placeholder="Enter Group Name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                />

                {allUsersData?.map((userChat, index) =>
                  userChat.userid !== user.username ? (
                    <div
                      key={index}
                      className={
                        darkMode === true
                          ? styles.groupChatHeaderDark
                          : styles.groupChatHeader
                      }
                    >
                      <img
                        width="15%"
                        style={{ aspectRatio: "1" }}
                        className={styles.profile}
                        src={
                          userChat.imgUrl ? userChat.imgUrl : "profile-1.jpg"
                        }
                        alt=""
                      />
                      <div className={styles.chatName}>{userChat.name}</div>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        onChange={(e) =>
                          checkGroupUser(e.target.checked, userChat)
                        }
                        style={{ float: "right" }}
                      />
                    </div>
                  ) : null
                )}
                <p style={{ textAlign: "center", marginTop: "10px" }}>
                  Add Group Photo
                </p>
                <input
                  type="file"
                  name="groupFile"
                  onChange={(e) => {
                    setGroupImg(e.target.files);
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <Button onClick={createGroup} style={{ padding: "5px 30px" }}>
                    Create
                  </Button>
                </div>
              </div>
            )}
            <div className={styles.container}>
              <div
                className={styles.chatBoxHeader}
                style={{
                  background: darkMode === true ? "#232A3B" : "white",
                  color: darkMode === true ? "white" : "black",
                }}
              >
                {selectedUser && !selectedGroup ? (
                  <>
                    <img
                      width="80px"
                      style={{ aspectRatio: 1, borderRadius: "50%" }}
                      src={selectedUser.imgUrl}
                      alt=""
                    />
                    <div
                      className={styles.chatUserName}
                      style={{
                        color: darkMode === true ? "white" : "black",
                      }}
                    >
                      {selectedUser.name}
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      width="80px"
                      style={{ aspectRatio: 1, borderRadius: "50%" }}
                      src={selectedGroup?.groupImgUrl}
                      alt=""
                    />
                    <div
                      className={styles.chatUserName}
                      style={{
                        color: darkMode === true ? "white" : "black",
                      }}
                    >
                      {selectedGroup?.groupName}
                    </div>
                  </>
                )}
              </div>
              <div className={styles.chatbox}>
                {stateMessages && selectedUser !== ""
                  ? // sort messages oldest to newest client-side
                    stateMessages
                      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                      .map((message, index) =>
                        // map each message into the message component with message as props
                        message.session ===
                          `${user.username}-${selectedUser.userid}` ||
                        message.session ===
                          `${selectedUser.userid}-${user.username}` ? (
                          <Message
                            message={message}
                            user={user.username}
                            selectedUser={selectedUser.userid}
                            messageOwner={message.owner}
                            key={index}
                            darkMode={darkMode}
                          />
                        ) : null
                      )
                  : stateMessages
                      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                      .map((message, index) =>
                        // map each message into the message component with message as props
                        message.session === `${selectedGroup?.session}` ? (
                          <Message
                            message={message}
                            user={user.username}
                            selectedUser={""}
                            messageOwner={message.owner}
                            key={index}
                            darkMode={darkMode}
                          />
                        ) : null
                      )}
              </div>
              <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.formBase}>
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    rootClose
                    overlay={
                      <Popover id="popover-basic" style={{ maxWidth: "100%" }}>
                        <Popover.Header as="h3">
                          Input File to Send
                        </Popover.Header>
                        <Popover.Body>
                          <input
                            type="file"
                            name="file"
                            onChange={(e) => {
                              setFile({
                                fileVal: e.target.files,
                                isFile: true,
                              });
                            }}
                          />
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button
                      color="white"
                      style={{
                        backgroundColor: darkMode === true ? "#232A3B" : "",
                        border: darkMode === true ? "none" : "",
                      }}
                      size="sm"
                    >
                      <AiOutlinePlusCircle
                        size="29px"
                        className={styles.fileicon}
                      />
                    </Button>
                  </OverlayTrigger>
                  <div style={{ width: "80%" }}>
                    <InputEmoji
                      borderRadius="5px"
                      borderColor="#2397f5"
                      value={messageText}
                      theme={darkMode === true ? "dark" : "light"}
                      onChange={setMessageText}
                      placeholder="Type a message"
                    />
                  </div>

                  <button
                    className="send"
                    style={{
                      marginLeft: "8px",
                      border: "none",
                      width: "40px",
                      backgroundColor: "#2397f5",
                      padding: "3px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      width="90%"
                      style={{ marginTop: "3px" }}
                      src="sendicon.png"
                    />
                  </button>
                </form>
              </div>
            </div>
            {selectedUser && !selectedGroup ? (
              <div className={styles.info}>
                <div
                  className={styles.infoHeader}
                  style={{
                    background: darkMode === true ? "#313A55" : "white",
                    color: darkMode === true ? "white" : "black",
                  }}
                >
                  <img
                    width="100px"
                    style={{ aspectRatio: 1, borderRadius: "50%" }}
                    src={selectedUser.imgUrl}
                    alt=""
                  />
                  <div className={styles.selectedUsername}>
                    {selectedUser.name}
                  </div>
                  <div className={styles.selectedDesignation}>
                    {selectedUser.designation.toUpperCase()}
                  </div>
                </div>
                <div
                  className={styles.infoBody}
                  style={{
                    background: darkMode === true ? "#313A55" : "white",
                    color: darkMode === true ? "white" : "black",
                  }}
                >
                  <div className={styles.selectedBodyHeader}>
                    Personal Information
                  </div>
                  <div className={styles.selectedBody}>
                    Country{" "}
                    <span>
                      <BiGlobe style={{ float: "right" }} size="30px" />
                    </span>
                  </div>
                  <div>{selectedUser.country}</div>
                  <div className={styles.selectedBody}>
                    Phone{" "}
                    <span>
                      <AiTwotonePhone style={{ float: "right" }} size="30px" />
                    </span>
                  </div>
                  <div>{selectedUser.phoneNo}</div>
                  <div className={styles.selectedBody}>
                    Email
                    <span>
                      <FiMail
                        style={{ float: "right", marginTop: "5px" }}
                        size="30px"
                      />
                    </span>
                  </div>
                  <div>{selectedUser.email}</div>
                </div>
                <div className={styles.infoFiles}>
                  <div
                    style={{
                      marginTop: "20px",
                      marginLeft: "20px",
                      fontWeight: "bolder",
                    }}
                  >
                    Shared Files
                  </div>
                  {stateMessages && selectedUser
                    ? // sort messages oldest to newest client-side
                      stateMessages
                        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                        .map((message, index) =>
                          // map each message into the message component with message as props
                          (message.session ===
                            `${user.username}-${selectedUser.userid}` ||
                            message.session ===
                              `${selectedUser.userid}-${user.username}`) &&
                          message.messageType !== "text" ? (
                            <AllFilesBySession
                              message={message}
                              key={index}
                              darkMode={darkMode}
                            />
                          ) : null
                        )
                    : null}
                </div>
              </div>
            ) : (
              <div className={styles.info}>
                <div
                  className={styles.infoHeader}
                  style={{
                    background: darkMode === true ? "#313A55" : "white",
                    color: darkMode === true ? "white" : "black",
                  }}
                >
                  <img
                    width="100px"
                    style={{ aspectRatio: 1, borderRadius: "50%" }}
                    src={selectedGroup?.groupImgUrl}
                    alt=""
                  />
                  <div className={styles.selectedUsername}>
                    {selectedGroup?.groupName}
                  </div>
                  <Button
                    variant="danger"
                    style={{ margin: "10px 0" }}
                    onClick={() => deleteGroup(selectedGroup?.session)}
                  >
                    Delete Group
                  </Button>
                </div>
                <div
                  style={{
                    background: darkMode === true ? "#313A55" : "white",

                    marginTop: "20px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      color: darkMode === true ? "white" : "black",
                      fontSize: "20px",
                      textAlign: "center",
                      fontWeight: "bold",
                      marginBottom: "15px",
                    }}
                  >
                    Members
                  </div>
                  {selectedGroup?.groupData?.map((member, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          color: darkMode === true ? "white" : "black",
                          fontSize: "18px",
                        }}
                      >
                        {index + 1}. &nbsp;{member.name}
                      </div>
                      {selectedGroup.groupData.length >
                      2 && member.userid!==user.username ? (
                        <MdDelete
                          onClick={() => deleteMember(member)}
                          style={{
                            color: "#BB2D3B",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                        />
                      ) : null}
                    </div>
                  ))}
                  <div style={{ textAlign: "center" }}>
                    <Button
                      size="sm"
                      style={{ marginTop: "10px" }}
                      onClick={handleShow}
                    >
                      Add member
                    </Button>
                  </div>
                </div>
                <div className={styles.infoFiles}>
                  <div
                    style={{
                      marginTop: "20px",
                      marginLeft: "20px",
                      fontWeight: "bolder",
                    }}
                  >
                    Shared Files
                  </div>
                  {stateMessages && selectedGroup
                    ? // sort messages oldest to newest client-side
                      stateMessages
                        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                        .map((message, index) =>
                          // map each message into the message component with message as props
                          message.session === selectedGroup?.session &&
                          message.messageType !== "text" ? (
                            <AllFilesBySession
                              message={message}
                              key={index}
                              darkMode={darkMode}
                            />
                          ) : null
                        )
                    : null}
                </div>
              </div>
            )}
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {newMember.length!==0 ? (
                newMember.map((userChat, index) => (
                  <div
                    key={index}
                    className={
                      darkMode === true
                        ? styles.groupChatHeaderDark
                        : styles.groupChatHeader
                    }
                  >
                    <img
                      width="15%"
                      style={{ aspectRatio: "1" }}
                      className={styles.profile}
                      src={userChat.imgUrl ? userChat.imgUrl : "profile-1.jpg"}
                      alt=""
                    />
                    <div className={styles.chatName}>{userChat.name}</div>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      onChange={(e) =>
                        checkGroupUser(e.target.checked, userChat)
                      }
                      style={{ float: "right" }}
                    />
                  </div>
                ))
              ) : (
                <div>All members are already added</div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  submitNewMember();
                  handleClose();
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default Messaging;

export async function getServerSideProps({ req }) {
  // wrap the request in a withSSRContext to use Amplify functionality serverside.
  const SSR = withSSRContext({ req });

  try {
    // currentAuthenticatedUser() will throw an error if the user is not signed in.
    const user = await SSR.Auth.currentAuthenticatedUser();

    // If we make it passed the above line, that means the user is signed in.
    const response = await SSR.API.graphql({
      query: listMessages,
      // use authMode: AMAZON_COGNITO_USER_POOLS to make a request on the current user's behalf
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    // return all the messages from the dynamoDB
    return {
      props: {
        messages: response.data.listMessages.items,
      },
    };
  } catch (error) {
    // We will end up here if there is no user signed in.
    // We'll just return a list of empty messages.
    return {
      props: {
        messages: [],
      },
    };
  }
}
