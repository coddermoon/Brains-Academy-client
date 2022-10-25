import React from 'react';
import './footer.css'
import { CDBFooter,CDBBox, CDBFooterLink, CDBBtn, CDBIcon } from 'cdbreact';
import logo from '../../../Assets/images/logo.png'
const Footer = () => {
    return (
        <CDBFooter className="shadow bg-grad">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="80px" />
              <span className="ml-3 h5 font-weight-bold">Brains Academy</span>
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
              <CDBFooterLink to="/">Resources</CDBFooterLink>
              <CDBFooterLink to="/">About Us</CDBFooterLink>
              <CDBFooterLink to="/">Contact</CDBFooterLink>
              <CDBFooterLink to="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink to="/">Support</CDBFooterLink>
              <CDBFooterLink to="/">Sign Up</CDBFooterLink>
              <CDBFooterLink to="/">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink to="/">Windframe</CDBFooterLink>
              <CDBFooterLink to="/">Loop</CDBFooterLink>
              <CDBFooterLink to="/">Contrast</CDBFooterLink>
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