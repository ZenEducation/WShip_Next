import React, { useEffect, useState } from "react";
import styles from "../../../styles/messcomp.module.css";
import { AiFillFile } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Storage } from "aws-amplify";
const Message = ({ message, messageOwner, selectedUser, user, darkMode }) => {
  const [fileUrl, setFileUrl] = useState("");
  const getFileDownloadUrl = async (key) => {
    let url = await Storage.get(key);
    setFileUrl(url);
    console.log("urll", fileUrl);
  };

  return (
    <>
      {(messageOwner === user || messageOwner === selectedUser) &&(selectedUser!=="")  ? (
        message.messageType === "text" ? (
          <div
            className={
              messageOwner == user
                ? styles.sentMessageContainer
                : styles.receivedMessageContainer
            }
          >
            <p
              className={styles.senderText}
              style={{
                color: darkMode === true ? "white" : "black",
              }}
            >
              {new Date(message.createdAt).toLocaleString()}
            </p>
            <div
              className={
                messageOwner == user
                  ? styles.sentMessage
                  : styles.receivedMessage
              }
              style={{
                background: darkMode === true ? "#313A55" : "",
                color: darkMode === true ? "white" : "",
              }}
            >
              <p>{message.message}</p>
            </div>
          </div>
        ) : (
          <div
            className={
              messageOwner == user
                ? styles.sentMessageContainer
                : styles.receivedMessageContainer
            }
          >
            <p className={styles.senderText} style={{
                color: darkMode === true ? "white" : "black",
              }}>
              {new Date(message.createdAt).toLocaleString()}
            </p>
            <div
              className={
                messageOwner == user
                  ? styles.sentMessage
                  : styles.receivedMessage
              }
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "15px",
                background: darkMode === true ? "#313A55" : "",
                color: darkMode === true ? "white" : "",
              }}
            >
              <AiFillFile size="50px" />
              <div style={{ marginRight: "30px" }}>
                <div style={{ fontWeight: "bolder" }}>{message.message}</div>
                <div style={{ color: "black", fontSize: "14px" }}>
                  {message.messageType}
                </div>
              </div>

              <OverlayTrigger
                trigger="click"
                placement="top"
                rootClose
                overlay={
                  <Popover id="popover-basic">
                    {fileUrl ? (
                      <a
                        href={fileUrl}
                        target="_blank"
                        style={{
                          textDecoration: "none",
                          fontSize: "18px",
                          padding: "10px",
                        }}
                      >
                        Open
                      </a>
                    ) : (
                      <p>Loading</p>
                    )}
                  </Popover>
                }
              >
                <Button
                  style={{
                    backgroundColor: "inherit",
                    color: "inherit",
                    borderRadius: "50%",
                    border: "none",
                    padding: "6px 8px",
                  }}
                  onClick={() => getFileDownloadUrl(message.message)}
                >
                  <BsThreeDotsVertical size="22px" />
                </Button>
              </OverlayTrigger>
            </div>
          </div>
        )
      ) : (
        message.messageType === "text" ? (
          <div
            className={
              messageOwner == user
                ? styles.sentMessageContainer
                : styles.receivedMessageContainer
            }
          >
            <p
              className={styles.senderText}
              style={{
                color: darkMode === true ? "white" : "black",
              }}
            >
              {new Date(message.createdAt).toLocaleString()}
            </p>
            <p
              className={styles.senderText}
              style={{
                color: darkMode === true ? "white" : "black",
              }}
            >
              {messageOwner}
            </p>
            <div
              className={
                messageOwner == user
                  ? styles.sentMessage
                  : styles.receivedMessage
              }
              style={{
                background: darkMode === true ? "#313A55" : "",
                color: darkMode === true ? "white" : "",
              }}
            >
              <p>{message.message}</p>
            </div>
          </div>
        ) : (
          <div
            className={
              messageOwner == user
                ? styles.sentMessageContainer
                : styles.receivedMessageContainer
            }
          >
            <p className={styles.senderText} style={{
                color: darkMode === true ? "white" : "black",
              }}>
              {new Date(message.createdAt).toLocaleString()}
            </p>
            <p className={styles.senderText} style={{
                color: darkMode === true ? "white" : "black",
              }}>
              {message.owner}
            </p>
            <div
              className={
                messageOwner == user
                  ? styles.sentMessage
                  : styles.receivedMessage
              }
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "15px",
                background: darkMode === true ? "#313A55" : "",
                color: darkMode === true ? "white" : "",
              }}
            >
              <AiFillFile size="50px" />
              <div style={{ marginRight: "30px" }}>
                <div style={{ fontWeight: "bolder" }}>{message.message}</div>
                <div style={{ color: "black", fontSize: "14px" }}>
                  {message.messageType}
                </div>
              </div>

              <OverlayTrigger
                trigger="click"
                placement="top"
                rootClose
                overlay={
                  <Popover id="popover-basic">
                    {fileUrl ? (
                      <a
                        href={fileUrl}
                        target="_blank"
                        style={{
                          textDecoration: "none",
                          fontSize: "18px",
                          padding: "10px",
                        }}
                      >
                        Open
                      </a>
                    ) : (
                      <p>Loading</p>
                    )}
                  </Popover>
                }
              >
                <Button
                  style={{
                    backgroundColor: "inherit",
                    color: "inherit",
                    borderRadius: "50%",
                    border: "none",
                    padding: "6px 8px",
                  }}
                  onClick={() => getFileDownloadUrl(message.message)}
                >
                  <BsThreeDotsVertical size="22px" />
                </Button>
              </OverlayTrigger>
            </div>
          </div>
        )
      )}
    </>
  );
};
export default Message;
