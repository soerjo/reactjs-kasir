import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function NavbarComponent() {
  return (
    <>
      <Navbar variant="dark">
        <Navbar.Brand href="#home">
          <strong>SoerjoKasier</strong>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
