import React,{useEffect} from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import logo from '../../assets/img/quizwhiz-logo.png'
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Login = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  const handleGoBack = () =>
  {
    history.goBack();
  }
  return (
    <Container className='text-center text-white min-h-screen'>
      <Row>
        <Col>
          <img src={logo} alt='logo' className='login-logo mx-auto w-[215px]'/>
          
          <Form className='mx-auto form-width text-start'> {/* Remove 'mx-auto text-center' classes */}
          <IoArrowBackCircleOutline size={30} className='d-block hover:cursor-pointer' onClick={handleGoBack}/>
          <h1 className='text-center text-[40px] font-bold mb-[20px]'>Login</h1>
            <FormGroup className='mb-3'>
              <Label for='email' className='text-start'>Email address <span className='text-danger'>*</span></Label>
              <Input type='email' name='email' id='email' placeholder='Enter your email' required className='py-3 rounded-md text-white bg-transparent placeholder' />
            </FormGroup>
            <FormGroup className='mb-3'>
              <Label for='password' className='text-start'>Password <span className='text-danger'>*</span></Label>
              <Input type='password' name='password' id='password' placeholder='Enter your password' required className='py-3 rounded-md text-white bg-transparent placeholder' />
            </FormGroup>
            <div className='mt-2 d-flex justify-content-between'>
              <Link to='/signup'> <p className='mb-2 text-secondary '>Create an Account</p></Link>
              <Link to='/forgetpassword' className='mb-2 text-secondary'>Forgot Your Password?</Link>
            </div>
            <div className='mx-auto text-center'>
            <Link to='/'><Button color='primary' className='py-2 mt-4 w-75 font-bold text-xl rounded-lg'>Login &gt;&gt;</Button></Link>
            </div>
           
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;