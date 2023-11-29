import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import headingimage from '../../assets/headingimg.png';
import mayaimg from '../../assets/mayareview.png';
import krishimg from '../../assets/krishreview.png';
import nateimg from '../../assets/natereview.png';

const Reviews = () => {
    const imagePaths = [
        {
            id: 1,
            name: mayaimg,
        },
        {
            id: 2,
            name: krishimg,
        },
        {
            id: 3,
            name: nateimg,
        },
    ];

    return (
        <Container className='text-center text-white'>
            <Row>
                <Col>
                    <h1 className='my-5 reviews-heading d-flex align-items-center justify-content-center'>
                        Join the <span className='text-success'>A+</span> Club
                        <img src={headingimage} alt="Heading" className='heading-img-width' />
                    </h1>
                </Col>
            </Row>

            <Row className="justify-content-center image-border-style">
                {imagePaths.map((image, index) => (
                    <Col lg="6" className="mx-0 mb-2" key={index}>
                        <img className="image-styling img-fluid" src={image.name} alt={`Image ${index + 1}`} />
                    </Col>
                ))}
            </Row>

            <Row>
                <Col>
                    <h2 className='my-4 fw-bold'>over 10,000+ students</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Reviews;