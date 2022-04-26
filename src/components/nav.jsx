import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" className="navigation">
      <Container>
        <Navbar.Brand href="/" text="white">
          Kevin Wu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="navA">
              Project
            </Nav.Link>
            <Nav.Link href="/about" className="navA">
              About
            </Nav.Link>
            <Nav.Link href="/submit" className="navA">
              Experience
            </Nav.Link>
            <Nav.Link href="/login" className="navA">
              Contact
            </Nav.Link>
            <Nav.Link href="/login" className="navA">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
