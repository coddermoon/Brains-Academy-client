import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleCart = () => {
    return (
        <Col className='my-2' md="6">
           <Card >
      <Card.Img variant="top" src="https://sorobindu.com/wp-content/uploads/2022/06/wp-advance.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button className='mainBtn'>Go somewhere</button>
      </Card.Body>
    </Card>
        </Col>
    );
};

export default SingleCart;