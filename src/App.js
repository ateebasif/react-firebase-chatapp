import React, { useRef, useState } from "react";
import firebase from "./components/firebase";
import ChatRoom from "./components/Chat/ChatRoom";
import SignIn from "./components/SignIn.js";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import "./message.css";
import Navbar from "./components/Navbar/index";

function App() {
  const auth = firebase.auth();
  // gets the user via useAuthState hook
  const [user] = useAuthState(auth);

  console.log("user", user);

  return (
    <div className="App">
      {/*auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      ) */}

      <Navbar />

      <section style={{ padding: "10px 50px 0px 50px" }}>
        {user && (
          <div className="chatRoom">
            {" "}
            <ChatRoom />{" "}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
