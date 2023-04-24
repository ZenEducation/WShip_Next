import React, { useEffect, useRef, useState } from "react";
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
import Message from "./components/Message";
import { onCreateMessage } from "../graphql/subscriptions";
import InputEmoji from "react-input-emoji";
import { Post } from "@/src/models";
import Spinner from "react-bootstrap/Spinner";

function Messaging({ messages }) {
  const [stateMessages, setStateMessages] = useState([...messages]);
  const [messageText, setMessageText] = useState("");
  const [user, setUser] = useState(null);
  const [totalUsersData, setAllUsersData] = useState();
  const [selectedUser, setSelectedUser] = useState("");

  // function handleOnEnter(text) {
  //   console.log("enter", text);
  // }
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const amplifyUser = await Auth.currentAuthenticatedUser();
        setUser(amplifyUser);
        try {
          const posts = await DataStore.query(Post);
          if (posts.length !== 0) {
            setAllUsersData(posts);
            setSelectedUser(posts[0].userid)
          }
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
        console.log(value.data.onCreateMessage);
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

    // clear the textbox
    setMessageText("");

    const input = {
      // id is auto populated by AWS Amplify
      message: messageText, // the message content the user submitted (from state)
      owner: user.username,
      messageType: "text", // this is the username of the current user
    };

    // Try make the mutation to graphql API
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: createMessage,
        variables: {
          input: input,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
  const sortUserMessages = (userid) => {
    setSelectedUser(userid);
  };
  if (user) {
    return (
      <div className={styles.background}>
        <div className={styles.userContainer}>
          <h1 className={styles.title}>Chats</h1>
          {totalUsersData?.map((userChat, index) =>
            userChat.userid !== user.username ? (
              <div
                key={index}
                className={selectedUser==userChat.userid?styles.chatHeaderSelected:styles.chatHeader}
                onClick={() => {
                  sortUserMessages(userChat.userid);
                }}
              >
                <img
                  width="15%"
                  className={styles.profile}
                  src="profile-1.jpg"
                  alt=""
                />
                <div className={styles.chatName}>{userChat.name}</div>
              </div>
            ) : null
          )}
        </div>
        <div className={styles.container}>
          <div className={styles.chatbox}>
            {stateMessages &&selectedUser? (
              // sort messages oldest to newest client-side
              stateMessages
                .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                .map((message, index) => (
                  // map each message into the message component with message as props
                  <Message
                    message={message}
                    user={user.username}
                    selectedUser={selectedUser}
                    messageOwner={message.owner}
                    key={index}
                  />
                ))
            ) : (
              <Spinner animation="border" />
            )}
          </div>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.formBase}>
              <InputEmoji
                borderRadius="5px"
                borderColor="#2397f5"
                value={messageText}
                onChange={setMessageText}
                cleanOnEnter
                placeholder="Type a message"
              />

              <button
                className="send"
                style={{
                  marginLeft: "8px",
                  border: "none",
                  width: "40px",
                  backgroundColor: "#2397f5",
                  padding: "3px",
                  borderRadius: "50%",
                  hover: "pointer",
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
      </div>
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
