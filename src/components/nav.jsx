import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import resume from "../files/kevinwusenyc.pdf";
import "../style/navbar.css";
const dropFromAbove = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" className="navigation navbar-custom">
      <Container>
        <Navbar.Brand href="/" text="black" className="home">
          Kevin Wu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#project" className="navA">
              Project
            </Nav.Link>
            <Nav.Link href="#experience" className="navA">
              Experience
            </Nav.Link>
            <Nav.Link href="#about" className="navA">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="navA">
              Contact
            </Nav.Link>
            <Nav.Link href={resume} className="navA" target="_blank">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
