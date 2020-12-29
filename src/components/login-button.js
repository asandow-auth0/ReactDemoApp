import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      //When calling loginWithRedirect you can use the options described here:
      //https://auth0.github.io/auth0-react/interfaces/redirectloginoptions.html
      //This is where you can specify the database connection to authenticate from
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;