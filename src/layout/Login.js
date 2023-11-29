import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import logo from '../assets/loginlogo.png';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Login = () => {
  return (
    <Container className='text-center text-white'>
      <Row>
        <Col>
          <img src={logo} alt='Logo' className='my-5 login-logo' />
          
          <Form className='mx-auto form-width text-start'> {/* Remove 'mx-auto text-center' classes */}
          <IoArrowBackCircleOutline size={30} className='d-block' />
          <h1 className='text-center'>Login</h1>
            <FormGroup className='mb-3'>
              <Label for='email' className='text-start'>Email address <span className='text-danger'>*</span></Label>
              <Input type='email' name='email' id='email' placeholder='Enter your email' required className='py-3 text-white bg-transparent placeholder' />
            </FormGroup>
            <FormGroup className='mb-3'>
              <Label for='password' className='text-start'>Password <span className='text-danger'>*</span></Label>
              <Input type='password' name='password' id='password' placeholder='Enter your password' required className='py-3 text-white bg-transparent placeholder' />
            </FormGroup>
            <div className='mt-2 d-flex justify-content-between'>
              <a to='/create-account' className='my-2 text-secondary '>Create Your Account</a>
              <a to='/forgot-password' className='my-2 text-secondary'>Forgot Password?</a>
            </div>
            <div className='mx-auto text-center'>
            <Link to='/dashboard'><Button color='primary' className='py-3 my-5 w-75 fs-5 fw-bold'>Login &gt;&gt;</Button></Link>
            </div>
           
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;