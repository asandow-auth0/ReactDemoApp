import React, { useState } from "react";
import {NavLink as RouterNavLink} from "react-router-dom";

import AuthNav from "./auth-nav";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const[isOpen, setIsOpen] = useState(false);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container mb-3">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand className="logo"/>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/"
                  exact 
                  activeClassName="router-link-exact-active"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <AuthNav/>
              </NavItem>
              {isAuthenticated && (
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/external-api"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    External API
                  </NavLink>
                </NavItem>
              )}
              {isAuthenticated && (
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/game"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Game
                  </NavLink>
                </NavItem>
              )}
              {isAuthenticated && (
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/profile"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;