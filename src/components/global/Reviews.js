

import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import headingimage from '../../assets/img/headingimg.png';
import mayaimg from '../../assets/img/mayareview.png';
import krishimg from '../../assets/img/krishreview.png';
import nateimg from '../../assets/img/natereview.png';

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
        <Container fluid className='text-white'>
            <Row>
                <Col>
                    <h1 className='my-5 mx-auto text-center text-2xl font-bold lg:text-6xl reviews-heading flex justify-center items-center'>
                        Join the <span className='text-[#13D155] mx-1'> A+</span> Club 
                        <img src={headingimage} alt="Heading" className='heading-img-width' />
                    </h1>
                </Col>
            </Row>

            <Row className="justify-content-center image-border-style">
                {imagePaths.map((image, index) => (
                    <Col lg="4" md="6" sm="12" className="mx-0 mb-2" key={index}>
                        <img className="image-styling img-fluid" src={image.name} alt={`Image ${index + 1}`} />
                    </Col>
                ))}
            </Row>

            <Row>
                <Col>
                    <h2 className='my-4 text-center text-4xl font-bold'>over 10,000+ students</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Reviews;
