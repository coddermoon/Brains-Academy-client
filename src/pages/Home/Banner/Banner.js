import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <section id='banner'>
         <Container>
         <Row>
            <Col  className="d-flex align-items-center" lg="6">
<div>
<h1>Envesting in Knowlwdge and <span className='title'>Your Future</span></h1>
<p>With the helping of E-learning,Create Your own path and drive your skill in your own achive</p>

<button  className="mainBtn"><Link to='/courses'>Enroll Now  <FaArrowRight/> </Link></button>
</div>

            </Col>
            <Col lg="6">
              <div  className="d-flex align-items-center">
              <img src="https://img.freepik.com/free-vector/hand-holding-smartphone-with-tutor-screen_1262-20644.jpg" alt="prof" />
              </div>
            </Col>
          </Row>
         </Container>
        </section>
    );
};

export default Banner;