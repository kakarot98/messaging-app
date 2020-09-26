import React, { useState } from "react";
import "./Login.css";
import whatsapp from "./whatsapp.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Login = () => {
  //const [photoLink, setPhotoLink] = useState("")

  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        //setPhotoLink(result.user.photoURL)
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <div className="login-container">
        <img src={whatsapp} alt="Messaging App" />

        <div className="login-text">
          <h1>Sign in to the Messaging App</h1>
        </div>

        <Button className="button" onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
