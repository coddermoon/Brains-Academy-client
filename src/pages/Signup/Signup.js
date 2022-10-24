import React, { useContext } from "react";
import {AuthContext} from '../../Assets/Contexts/AuthProvider'
import "./signup.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {  FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";





const Signup = () => {
  const {createUserWithEmail} = useContext(AuthContext)
  console.log(createUserWithEmail)

const handleRegister=(e)=>{
  e.preventDefault();
  const form = e.target 
  // const name = form.name.value
  const email = form.email.value
  const password = form.password.value

  createUserWithEmail(email,password)
  .then(result=>{

    toast.success("successfully User Created")

    console.log(result.user)
  })
  .catch(err=>{
    toast.error(err.message)
   
  
    
     
  })

}

  return (
    <div className="form-style animation">
      <Form onSubmit={handleRegister} className="form-reg p-rel">
        <span id="animatedSpan"></span>
        <span id="animatedSpan"></span>
        <span id="animatedSpan"></span>
        <span id="animatedSpan"></span>
        <div className="form-content ">
          <h2 className="text-center my-3">Register Now</h2>
          <div className="fields">
            <Form.Group className="m-3 py-2" >
              <Form.Control type="text" name="name" placeholder="Enter Your Fullname"  required/>
            </Form.Group>
            <Form.Group className="m-3 py-2" >
              <Form.Control type="email" name="email" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="m-3 py-2" >
              <Form.Control type="password" name = "password" placeholder="Enter email" required />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-center pt-3">
              <button className=" mainBtn w-100 mx-3 text-center" type="submit">
                Register
              </button>
            </div>
            <Form.Group>
              <p className="text-center pt-3 mb-0">
                Forget Password? <Link to="/">Recovery Now</Link>
              </p>
              <p className="text-center pt-1">
                Already Have an Account? <Link to="/login">Login now</Link>
              </p>
             

              <div>
              <h3 className="separator">
                <p className="d-inline">or</p>
              </h3>
              <div className="d-flex align-items-center justify-content-center pt-3">
              <Button className="google-btn  w-100 mx-3 text-center" variant="outline-dark" >
                <span className="google-icon"><FaGoogle/></span>
                Containue With Google
              </Button>
            </div>
              </div>
            </Form.Group>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
