import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "reactstrap";
import AuthenticationButton from "./components/authentication-button";
import NavBar from "./components/nav-bar";
import Loading from "./components/loading";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalAPI";
import Game from "./views/Game";
import ProtectedRoute from "./auth/protected-route";


const App = () => {
  const {isLoading, error, isAuthenticated} = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading){
    return <Loading />
  }

  return (
    <Router>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/external-api" component={ExternalApi} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/game" component={Game} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default app;