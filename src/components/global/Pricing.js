import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import done from '../../assets/img/getstarted.png';
import visa from '../../assets/img/visa.59e5336e2cc230bd7808.png';
import ace from '../../assets/img/ace.af836085d33a6015f15f.png';
const Pricing = () => {
    return (
        <section id='#get-started'>
        <Container className='py-20 text-center text-white'>
            <Row>
                <Col>
                    <h1 className='my-5 text-3xl lg:text-6xl font-bold  flex items-center justify-center'>
                        Get Started
                        <img src={done} alt="Heading" className='sm:w-[50px] md:w-[70px] mx-2' />
                    </h1>
                </Col>
            </Row>

            <Row className='mx-auto px-1 get-started-container flex items-center justify-center'>
                <Col className='pt-5 pb-2 text-center'>
                    <h1 className='py-2 text-4xl font-bold'>Start Learning Faster</h1>
                    <h3 className='py- text-3xl'>Get your first week for</h3>
                    <h1 className='display-1 fw-bolder text-5xl lg:text-6xl font-bold '>Only <span className='text-[#636ce4]'>£6.99</span></h1>
                    <p className='py-3 fs-3 fw-bold'>and then £15.99 /month</p>

                    <Button className='p-2 px-5 py-4 btn rounded-5 font-bold text-3xl lg:text-6xl rounded-3xl' size='lg' color='primary'>Get Started</Button>
                    <p className='py-3 font-bold text-lg'><em>100% Money Back Guarantee / Cancel Anytime</em></p>

                    <div className='d-flex justify-content-between align-items-center'>

                        <img src={visa} alt="Heading" className='getstarted-img-width1' />
                        <img src={ace} alt="Heading" className='getstarted-img-width2' />
                    </div>

                </Col>
            </Row>
        </Container>
        </section>
    );
}

export default Pricing;