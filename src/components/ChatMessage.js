import React from "react";
import "./message.css";
import firebase from "./firebase";

export default function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const auth = firebase.auth();

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  const imgClass = uid === auth.currentUser.uid ? "imgSent" : "imgReceived";
  const textClass = uid === auth.currentUser.uid ? "textSent" : "textReceived";

  return (
    <div className={`message ${messageClass}`}>
      <img
        src={
          photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
        }
        alt=""
        height="50"
        style={{ borderRadius: 50 }}
        className={`mesgImg ${imgClass}`}
      />
      <p className={`${textClass}`}>{text}</p>
    </div>
  );
}
