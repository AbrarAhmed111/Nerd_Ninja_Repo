import React, { useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import logo from '../../assets/img/quizwhiz-logo.png'
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const OTP = () => {

     // Scroll to the top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // This is for back icon
    const history = useHistory();

    const handleGoBack = () =>
    {
        history.goBack();
    }

    return (
        <Container className='text-center text-white min-h-screen'>
            <Row>
                <Col className=''>
                    <img src={logo} alt='logo' className='login-logo mx-auto w-[215px] ' />

                    <Form className='mx-auto form-width text-start'>
                        <IoArrowBackCircleOutline size={30} className='d-block hover:cursor-pointer' onClick={handleGoBack}/>
                        <h1 className='text-center text-[30px] font-bold my-[20px]'>OTP Received</h1>
                        <FormGroup className='mb-3'>
                            <Label for='email' className='text-start'>Enter the OTP Send to your Email <span className='text-danger'>*</span></Label>
                            <Input type='email' name='email' id='email' placeholder='Enter OTP' required className='py-3 rounded-md text-white bg-transparent placeholder' />
                        </FormGroup>
                        <div className='mx-auto text-center'>
                            <Link to='/resetpassword'><Button color='primary' className='py-2 my-5 w-75 font-bold text-xl rounded-lg'>
                                Proceed &gt;&gt;</Button></Link>
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default OTP;
