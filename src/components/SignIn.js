import React from "react";
import firebase from "./firebase";

export default function SignIn() {
  const auth = firebase.auth();

  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={SignInWithGoogle}>Sign in with Google</button>;
}
