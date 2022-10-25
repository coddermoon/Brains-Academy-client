import React from 'react';
import './Courses.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import CourseAside from './CourseAside/CourseAside';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col md="3">
                    <div className="courseSidebar">
                    <CourseAside/>
                    </div>
                </Col>
                <Col md="9">
                   <Outlet/>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;