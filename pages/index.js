import Head from "next/head";
import { Auth, DataStore } from "aws-amplify";
import { Post } from "@/src/models";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown, DropdownButton, Spinner } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import parse from "html-react-parser";
import { Storage } from "@aws-amplify/storage";
import ImageUploader from "./components/ImageUploader";
import { useRouter } from "next/router";
const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
];

export default function Home() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [content, setContent] = useState("");
  const [mode, setMode] = useState("ADD");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [imgShow, setImgShow] = useState(false);
  const [data, setData] = useState();
  const [profile, setProfile] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [country, setCountry] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [gender, setGender] = useState("Select Gender");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");

  const handleClose = () => setShow(false);
  const handleImgClose = () => setImgShow(false);
  const handleShow = () => setShow(true);
  const handleImgShow = () => setImgShow(true);
  const router = useRouter();

  const imageUploadHandler = (event) => {
    setUserImage(event.target.files[0]);
  };
  const submitImagehandler = async () => {
    handleImgClose();
    setUserImage("");
    setLoading(true);
    try {
      imgPromise = await Storage.put(userName, userImage, {
        contentType: userImage.type,
      });

      getImage();
      toast.success("Image Uploaded Successfully", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const signOutHandler = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log(err);
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    handleClose();
    setLoading(true);
    const currentUser = await Auth.currentAuthenticatedUser();
    // console.log(currentUser.username);
    if (mode === "ADD") {
      try {
        await DataStore.save(
          new Post({
            userid: currentUser.username,
            name: name,
            designation: designation,
            content: content,
            imgUrl: "Nil",
            country: country,
            phoneNo: phoneNo,
            gender: gender,
            email: email,
            github: github,
            facebook: facebook,
            instagram: instagram,
            linkedin: linkedin,
          })
        );
        console.log("Post saved successfully!");
        toast.success("Document Added Successfully", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        getDocs();
      } catch (error) {
        toast.error(err, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        console.log("Error saving post", error);
      }
    } else {
      const original = await DataStore.query(Post, (c) =>
        c.userid.eq(currentUser.username)
      );
      try {
        const update = await DataStore.save(
          Post.copyOf(original[0], (updated) => {
            updated.name = name;
            updated.designation = designation;
            updated.content = content;
            (updated.country = country),
              (updated.phoneNo = phoneNo),
              (updated.gender = gender),
              (updated.email = email),
              (updated.github = github),
              (updated.facebook = facebook),
              (updated.instagram = instagram),
              (updated.linkedin = linkedin);
          })
        );
        toast.success("Updated successfully", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        getDocs();
      } catch (err) {
        toast.error(err, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        console.log("Error", err);
      }
    }
    setLoading(false);
  };
  const getImage = async () => {
    setLoading(true);
    const currentUser = await Auth.currentAuthenticatedUser();
    const original = await DataStore.query(Post, (c) =>
      c.userid.eq(currentUser.username)
    );

    let imgUrl = await Storage.get(currentUser.username);
    try {
      const update = await DataStore.save(
        Post.copyOf(original[0], (updated) => {
          updated.imgUrl = imgUrl;
        })
      );
      console.log(update);
    } catch (err) {
      toast.error(err, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      console.log("Error", err);
    }

    setProfile(imgUrl);
    setLoading(false);
  };

  const getDocs = async () => {
    setLoading(true);
    const currentUser = await Auth.currentAuthenticatedUser();
    console.log(currentUser);
    setUserName(currentUser.username);
    try {
      const posts = await DataStore.query(Post, (c) =>
        c.userid.eq(currentUser.username)
      );
      if (posts.length !== 0) {
        setData(posts[0]);
        setName(posts[0].name);
        setDesignation(posts[0].designation);
        setContent(posts[0].content);
        setCountry(posts[0].country);
        setPhoneNo(posts[0].phoneNo);
        setGender(posts[0].gender);
        setEmail(posts[0].email);
        setGithub(posts[0].github);
        setFacebook(posts[0].facebook);
        setInstagram(posts[0].instagram);
        setLinkedin(posts[0].linkedin);
        setMode("EDIT");
      }
      console.log(
        "Posts retrieved successfully!",
        JSON.stringify(posts, null, 2)
      );
    } catch (error) {
      console.log("Error retrieving posts", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getDocs();
    getImage();
  }, []);
  return (
    <>
      <div className="parent">
        Welcome &nbsp; {userName} &nbsp;{" "}
        <Button className="logout" onClick={() => signOutHandler()}>
          Log Out
        </Button>
        {!data ? (
          <Button variant="primary" onClick={handleShow}>
            Add All required information for chatting
          </Button>
        ) : null}
        {data ? (
          <Button
            variant="primary"
            onClick={() => {
              router.push("/messaging");
            }}
          >
            Chat
          </Button>
        ) : null}
        {!loading ? (
          data && profile ? (
            <>
              <div className="contentWrapper">
                <div>
                  <div className="midPara">Name : {data.name}</div>
                  <div className="midPara">
                    Designation : {data.designation}
                  </div>
                  <div className="midPara">Country : {data.country}</div>
                  <div className="midPara">Phone : {data.phoneNo}</div>
                  <div className="midPara">Gender : {data.gender}</div>
                  <div className="midPara">Email : {data.email}</div>
                  <div className="midPara">Github : {data.github}</div>
                  <div className="midPara">Facebook : {data.facebook}</div>
                  <div className="midPara">LinkedIn : {data.linkedin}</div>
                  <div className="midPara">Instagram : {data.instagram}</div>
                  <div className="bottomPara">Content : </div>
                  <div className="contentPara">{parse(data.content)}</div>

                  <Button variant="primary" onClick={handleShow}>
                    Edit
                  </Button>
                </div>
                <div className="image-container">
                  <img
                    className="uploaded-image"
                    alt="Upload image for profile picture"
                    src={profile}
                  />
                </div>
                <Button variant="primary" onClick={handleImgShow}>
                  Upload
                </Button>
              </div>
            </>
          ) : null
        ) : (
          <div className="loader">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
        <ToastContainer />
        <Modal show={imgShow} onHide={handleImgClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Image for Profile Picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ImageUploader
              imageUploadHandler={imageUploadHandler}
              image={userImage}
            />

            <Button
              variant="primary"
              style={{ marginTop: "20px" }}
              onClick={submitImagehandler}
            >
              Submit
            </Button>
          </Modal.Body>
        </Modal>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="formHeader">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phone"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <DropdownButton
                  id="dropdown-basic-button"
                  title={!gender?"Select gender":gender}
                  onSelect={(e)=>setGender(e)}
                >
                  <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
                  <Dropdown.Item eventKey="Female">
                    Female
                  </Dropdown.Item>
                  
                </DropdownButton>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Github</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Github URL"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Facebook URL"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Linked In</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Linked In URL"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Instagram URL"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <ReactQuill
                  modules={modules}
                  onChange={setContent}
                  formats={formats}
                  value={content}
                  theme="snow"
                />
              </Form.Group>

              <div className="buttonWrapper">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => submitHandler(e)}
                >
                  Submit
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </div>
            </Form>
            <img
              src="https://imageedit10716-dev.s3.ap-southeast-2.amazonaws.com/public/c242ca08-de37-4b73-83c9-a2dd67291f51img?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCmFwLXNvdXRoLTEiRzBFAiEAlxpRe8KqtbinNo9s0EYct%2F4HMcPZCJ6HN660IfsrsUwCIG0By0Om31oc1YR%2FF6ev1cMnNcQNPeZpuvgzBmOzieROKv0CCBoQABoMNTk2MTA5OTY3MDY0IgxdzC%2F2t3heVwt0KCUq2gLVPi%2F16WLC33eoQ%2BrDkaaMhoLTdshzWkboFsThdwOhhG6Jyakmbsnweq4B3k0yaxiEa5PC9KOKAh5M5ZdCT0%2FkS9EOQn10WqQS6RcuSONXQmTRFD%2BvAa6NN%2Fx1O58DmAqWtRhmiND2JCT%2BSJZ7HE5JpANnqd55B0T6wOFMn%2BDv72gZCGMTE0XoePvXEKUwF1MuAtaSe5ParY4RNFE3tC00mzTt1FXj%2BnsLc2C23j8VYxq4N%2Fgzmznm9EGXkSnjpWWKiVjqT%2BsYlzXgshDazXJ%2BvHcPiwsIJUUelRyoRp5F4R9N%2BSDK525pVaAvlkYlhMFtszvMyHTvpbqdwspXcPkknCfxRAoHczq8DfLwk%2FhKqDYJHVWenwE4c3hVtCJSI85lD%2BHs%2BsTSthk90FAzeNDRyz69oaZRNSH8aIgiyD72IYIgo920UpoXwRI4%2FHJpKcPIr7BJ6fuOBUzJMLubzaAGOrMC4ShyA8SDEXoA%2B4%2FDWcpDY2ikvbR8sh4jPVnfxlBz8IVwHURt%2B%2BTbDJzZQSj0Ghsy3pb8fhTnC%2BGAsxGHTMda2UQsAyfoR8d6Zbw0PB%2F8WaR1gm9srj49FtXn6q0tLaRP2oo%2BD2ZOgSlqy6sDLbDZiq7py16AlfM16I4BRCw5RJeHZlMaSZgmqp2wcnpgzX6SPAPZz3hn6ey%2FYZirRXD7g6VXTcMj5e2BJ4dRjQJVhZcQP8e8Kq1vzvRuWM6aEHuru7V1DWvlC%2FHv6BDuCa6DONoMgIMFH9fkw5Ria2ShPdx6fh5XN%2Bmpbn3RjilacuZkBmsoCB7IcvtlkDUEVZBXayhn1GzpyivTG6IfEhdi4OyEwQ1A072aJqEDj13uRtD3TufuI8d6uoAYkpxfmZmHr6U8Zw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230316T171346Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYVSXMH3MOBNCGK3Z%2F20230316%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=61f570049a397933114d446eb034d8eaa0ceb6518adf5a73dc207c6e730915f0"
              alt=""
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
