import React,{useEffect} from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import logo from '../../assets/img/quizwhiz-logo.png';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const Contactus = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <Container className=' text-white'>
            <Row>
                <Col>
                    <img src={logo} alt='Logo' className=' mx-auto w-[270px]' />
​
                    <Form className='mx-auto form-width text-start'> {/* Remove 'mx-auto text-center' classes */}
                        <IoArrowBackCircleOutline size={30} className='d-block' />
                        <h1 className='text-center text-[40px] font-bold my-[20px]'>Contact Us</h1>
                        <FormGroup className='mb-3'>
                            <Label for='email' className='text-start'>Email address <span className='text-danger'>*</span></Label>
                            <Input type='email' name='email' id='email' placeholder='Enter your email' required className='py-4 rounded-md text-white bg-transparent placeholder ' />
                        </FormGroup>
                        <FormGroup className='mb-3'>
                            <Label for='message' className='text-start'>Content <span className='text-danger'>*</span></Label>
                            <Input type='textarea' name='content' id='content' rows='5' placeholder='Enter the Content' required className='py-4 rounded-md text-white bg-transparent placeholder ' />
                        </FormGroup>
                        
​
                        <div className='mx-auto text-center'>
                            <Link to=''><Button className='py-3 my-5 btn w-75 font-bold text-xl rounded-lg' color='primary' >Send &gt;&gt;</Button></Link>
                        </div>
​
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
export default Contactus;