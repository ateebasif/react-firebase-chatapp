import React, { useRef, useState } from "react";
import firebase from "./components/firebase";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn.js";

import { useAuthState } from "react-firebase-hooks/auth";
import "./message.css";

function App() {
  const auth = firebase.auth();
  // gets the user via useAuthState hook
  const [user] = useAuthState(auth);

  console.log("user", user);

  return (
    <div className="App">
      {auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      )}
      <h3>chat app</h3>

      <header></header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
