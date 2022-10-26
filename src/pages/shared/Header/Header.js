import React, { useContext } from "react";
import './Header.css'
import {

  Container,

  Nav,
  Navbar,
 
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../Assets/images/logo.png'
import { AuthContext } from "../../../Assets/Contexts/AuthProvider";
const Header = () => {

  const {user} = useContext(AuthContext)
 



  return (
    <Navbar collapseOnSelect expand="lg" className="bg-grad" variant="dark">
      <Container>
        <Navbar.Brand >
          <img className="logo" src={logo} alt="" />
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
           
              
          </Nav>
          <Nav>
            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/courses">Courses</Link>
            <Link className="navlink" to="/blog">Blog</Link>
          {

            
          
user?.uid ?  <>



           <img style={{height: "45px",borderRadius:"50%"}} src={user?.photoURL? user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="profile" title={user?.displayName} />
            </>
            :
           <>
           <Link  className="navlink" to="/login">Login</Link>
            <Link  className="navlink" to="/signup">signup</Link>
           </>
           }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
