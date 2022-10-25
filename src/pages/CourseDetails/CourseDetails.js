import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';




const CourseDetails = () => {
    const courseDetails = useLoaderData()
    const {title,thumbnail,course_description,details}= courseDetails
    const {duration,Certificate}= course_description
console.log(courseDetails)


    return (
        <div className='mt-5'>
          <Row>
            <Col md="5">
           
                <img className='img-fluid' src={thumbnail} alt={title} />
            </Col>
            <Col md="7">
                <h2>{title}</h2>
                <Card className='py-5 px-2  m-1'>
                    <p>{details}</p>
                    <div className='learning-topic'>
                        <h2 className='fw-semibold'>What you will Learn To This Course?</h2>
                    </div>
                   <h6><span  className="fw-bold">Course duration</span> : {duration}</h6>
                   <h6><span  className="fw-bold">Certificate</span> : {Certificate}</h6>
                </Card>
            </Col>
          </Row>
        </div>
    );
};

export default CourseDetails;