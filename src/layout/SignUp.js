import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import logo from '../assets/img/quizwhiz-logo.png';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <Container className=' text-white'>
            <Row>
                <Col>
                    <img src={logo} alt='Logo' className=' mx-auto w-[270px]' />
​
                    <Form className='mx-auto form-width text-start'> {/* Remove 'mx-auto text-center' classes */}
                        <IoArrowBackCircleOutline size={30} className='d-block' />
                        <h1 className='text-center text-[40px] font-bold my-[20px]'>Signup</h1>
                        <FormGroup className='mb-3'>
                            <Label for='email' className='text-start'>Email address <span className='text-danger'>*</span></Label>
                            <Input type='email' name='email' id='email' placeholder='Enter your email' required className='py-4 rounded-md text-white bg-transparent placeholder ' />
                        </FormGroup>
                        <FormGroup className='mb-3'>
                            <Label for='password' className='text-start'>Password <span className='text-danger'>*</span></Label>
                            <Input type='password' name='password' id='password' placeholder='Enter your password' required className='py-4 rounded-md text-white bg-transparent placeholder' />
                        </FormGroup>
                        <FormGroup className='mb-3'>
                            <Label for='password' className='text-start'>Confirm Password <span className='text-danger'>*</span></Label>
                            <Input type='password' name='password' id='password' placeholder='Enter your password' required className='py-4 rounded-md text-white bg-transparent placeholder' />
                        </FormGroup>
​
                        <div className='mx-auto text-center'>
                            <Link to='/sign-up'><Button className='py-3 my-5 btn w-75 font-bold text-xl rounded-lg' color='primary' >Finish Signup &gt;&gt;</Button></Link>
                        </div>
​
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
export default Signup;