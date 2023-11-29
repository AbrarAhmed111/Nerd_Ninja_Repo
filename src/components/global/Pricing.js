import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import done from '../../assets/getstarted.png';
import visa from '../../assets/visa.59e5336e2cc230bd7808.png';
import ace from '../../assets/ace.af836085d33a6015f15f.png';
const Pricing = () => {
    return (
        <Container className='py-20 text-center text-white'>
            <Row>
                <Col>
                    <h1 className='my-5 get-started-heading d-flex align-items-center justify-content-center'>
                        Get Started
                        <img src={done} alt="Heading" className='heading-img-width' />
                    </h1>
                </Col>
            </Row>

            <Row className='mx-auto get-started-container d-flex justify-content-between align-items-center'>
                <Col className='pt-5 pb-2 text-center'>
                    <h1 className='py-2'>Start Learning Faster</h1>
                    <h3 className='py-2'>Get your first week free</h3>
                    <h1 className='display-1 fw-bolder get-started-heading'>Only <span className='text-success'>$0.00</span></h1>
                    <p className='py-3 fs-3 fw-bold'>and then $6.99 /month</p>

                    <Button className='p-4 px-5 btn rounded-5 fs-2 fw-bold get-started-heading rounded-3xl' size='lg' color='primary'>Get Started</Button>
                    <p className='py-3 fw-bold text'><em>100% Money Back Guarantee / Cancel Anytime</em></p>

                    <div className='d-flex justify-content-between align-items-center'>

                        <img src={visa} alt="Heading" className='getstarted-img-width1' />
                        <img src={ace} alt="Heading" className='getstarted-img-width2' />
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default Pricing;