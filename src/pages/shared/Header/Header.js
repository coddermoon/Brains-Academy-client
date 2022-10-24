import React from "react";
import './Header.css'
import {

  Container,

  Nav,
  Navbar,
 
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
           
              
          </Nav>
          <Nav>
            <Link className="navlink" to="/">Home</Link>
            <Link  className="navlink" to="/login">Login</Link>
            <Link  className="navlink" to="/signup">signup</Link>
            <Link  className="navlink" to='order'>Privet</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
