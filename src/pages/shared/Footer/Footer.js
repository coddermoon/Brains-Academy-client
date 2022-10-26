import React from 'react';
import './footer.css'
import { CDBFooter,CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import {Link} from "react-router-dom";
import logo from '../../../Assets/images/logo.png'
const Footer = () => {
    return (
        <CDBFooter className="shadow bg-grad">
          
      <CDBBox display="flex" flex="column" className="mx-auto py-5 text-white" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="80px" />
              <span className="ml-3 h5 font-weight-bold text-white">Brains Academy</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
            With the helping of E-learning,Create Your own path and drive your skill in your own achive
           
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            Brains Academy
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <Link to="/">Resources</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Contact</Link>
              <Link to="/">Blog</Link>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <Link to="/">Support</Link>
              <Link to="/">Sign Up</Link>
              <Link to="/">Sign In</Link>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <Link to="/">Windframe</Link>
              <Link to="/">Loop</Link>
              <Link to="/">Contrast</Link>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <small className="text-center" style={{ width: '50%' }}>
            &copy; Brains Academy, 2022. All rights reserved.
          </small>
          <CDBBtn  className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn  className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn  className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
    );
};

export default Footer;