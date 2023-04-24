import React from "react";
import styles from "../../styles/messcomp.module.css";
import { Spinner } from "react-bootstrap";

export default function Message({ message, messageOwner, selectedUser, user }) {
  console.log(messageOwner,selectedUser,user,message)
  return (
    <>
      {messageOwner === user || messageOwner === selectedUser ? (
        <div
          className={
            messageOwner == user
              ? styles.sentMessageContainer
              : styles.receivedMessageContainer
          }
        >
          <p className={styles.senderText}>{message.owner}</p>
          <div className={messageOwner == user ? styles.sentMessage : styles.receivedMessage}>
            <p>{message.message}</p>
          </div>
        </div>
      ):null}
    </>
  );
}
