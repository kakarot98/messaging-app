import React from "react";
import "./Login.css";
import whatsapp from "./whatsapp.png";
import { Button } from "@material-ui/core";

const Login = () => {
  const signIn = () => {};

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
