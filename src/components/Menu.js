import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
} from "reactstrap";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"
      expand="md"
    >
      <NavbarBrand href="/">Friend Zone</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/home">หน้าแรก</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">หมวดหมู่</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">การแจ้งเตือน</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">กิจกรรม</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Menu;
