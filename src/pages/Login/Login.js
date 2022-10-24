import React from "react";
import {  Form } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className="form-style animation">
       
      <Form className="p-rel form-login">
      <span id="animatedSpan"></span>
        <span id="animatedSpan"></span>
        <span id="animatedSpan"></span>
        <span id="animatedSpan"></span>
        <div className="form-content">
          <h2 className="text-center my-3">Login</h2>
          <div className="fields">
            <Form.Group className="m-3 py-2" controlId="formBasicEmail">
              
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group >
            <Form.Group className="m-3 py-2" controlId="formBasicEmail">
             
              <Form.Control type="password" placeholder="Enter email" />
            </Form.Group>
         <div className="d-flex align-items-center justify-content-center pt-3">
         <button className=" mainBtn w-100 mx-3 text-center" type="submit">
        Submit
      </button>
     
         </div>
       <Form.Group>
        <p className="text-center pt-3 pb-0 mb-0">Forget Password? <Link to="/">Recovery Now</Link></p>
        <p className="text-center ">New user? <Link to="/signup">Register now</Link></p>
       </Form.Group>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
