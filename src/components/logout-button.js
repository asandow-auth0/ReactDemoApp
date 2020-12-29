import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    //Logout options: https://auth0.github.io/auth0-react/interfaces/logoutoptions.html
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;