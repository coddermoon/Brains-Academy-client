import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCart = ({course}) => {
    const {title,id}= course
    return (
        <Col className='my-2' md="6">
           <Card >
      <Card.Img variant="top" src="https://sorobindu.com/wp-content/uploads/2022/06/wp-advance.png" />
      <Card.Body>
        <Card.Title className='fw-bold'>{title}</Card.Title>
        <h4 className=''>
            <span className='m-3'>5000 ৳</span>
            <del className='m-3 text-muted'>3000 ৳</del>
            </h4>
     
        
       <Link to={`/courses/${id}`}> <button className='mainBtn'>See Details information</button></Link>
      </Card.Body>
    </Card>
        </Col>
    );
};

export default SingleCart;