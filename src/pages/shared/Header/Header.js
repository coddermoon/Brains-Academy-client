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
        <Navbar.Brand ><h4 className="font-weight-bold">Brains Academy</h4> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
           
              
          </Nav>
          <Nav>
            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/courses">Courses</Link>
            <Link className="navlink" to="/blog">Blog</Link>
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
