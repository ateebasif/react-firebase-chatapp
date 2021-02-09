import React, { useRef, useState } from "react";
import firebase from "../firebase";
import ChatMessage from "./ChatMessage";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function ChatRoom() {
  const firestore = firebase.firestore();
  const auth = firebase.auth();

  const dummy = useRef();
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt");

  // querying the db / listen to data with a hook
  const [messages] = useCollectionData(query, { idField: "id" });
  // console.log("messages", messages);

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </main>

      <div style={{ textAlign: "center" }}>
        <form onSubmit={sendMessage}>
          <input
            // type="text"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            style={{ width: "70%" }}
          />
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
}
