import React, { useState } from "react";
import styles from "../../../styles/messcomp.module.css";
import { Storage } from "aws-amplify";
import { AiFillFile } from "react-icons/ai";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";

const AllFilesBySession = ({ message, darkMode }) => {
  const [fileUrl, setFileUrl] = useState("");
  const getFileDownloadUrl = async (key) => {
    let url = await Storage.get(key);
    setFileUrl(url);
    console.log("urll", fileUrl);
  };
  return (
    <div className={styles.infoFilesContainer}>
      <div
        className={styles.receivedMessage}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "15px",
          background: darkMode === true ? "#313A55" : "white",
          color: darkMode === true ? "white" : "black",
        }}
      >
        <AiFillFile size="50px" color="gray" />
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
                <p>Wait</p>
              )}
            </Popover>
          }
        >
          <Button
            style={{
              background: darkMode === true ? "#313A55" : "white",
              color: darkMode === true ? "white" : "black",

              borderRadius: "50%",
              border: "none",
              padding: "6px 8px",
              float: "right",
            }}
            onClick={() => getFileDownloadUrl(message.message)}
          >
            <BsThreeDotsVertical size="22px" />
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default AllFilesBySession;
