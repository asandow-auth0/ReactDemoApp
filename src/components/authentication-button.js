import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

import { useAuth0 } from "@auth0/auth0-react";

/*
AuthenticationButton serves as a "log in/log out" switch that you can put 
anywhere you need that switch functionality. However, you still have separate 
LoginButton and LogoutButton components for cases when you need their functionality 
in isolation. For example, you may have a LogoutButton on a page that only 
authenticated users can see.

You can easily swap the LoginButton component with the SignupButton component 
in AuthenticationButton to create a "sign up/log out" switch. You could also 
wrap the "sign up/log out" switch in a NewAuthenticationButton component.

Using AuthenticationButton, you can add login and logout functionality to 
your NavBar component, for example, without thinking about the implementation 
details of how the authentication switch works.
*/
const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;