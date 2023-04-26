import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements.js";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            CLASS COMPONENT
          </NavLink>
          <NavLink to="/home" activeStyle>
            HOME
          </NavLink>
          <NavLink to="/aboutus" activeStyle>
            ABOUTUS
          </NavLink>
          <NavLink to="/apicall" activeStyle>
            APICALL
          </NavLink>
          <NavLink to="/counter" activeStyle>
            COUNTER
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
