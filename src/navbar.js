import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements.js";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            HOME
          </NavLink>
          <NavLink to="/employees" activeStyle>
            EMPLOYEELIST Page
          </NavLink>
          <NavLink to="/employeeoverview" activeStyle>
            EMPLOYEEOVERVIEW Page
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
