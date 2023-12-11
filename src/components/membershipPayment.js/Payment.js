import React, { useState } from 'react';
import { Col, Row, Container, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaCreditCard } from "react-icons/fa";
import { AiTwotoneEuroCircle, AiFillBank } from "react-icons/ai";
import logo from '../../assets/img/quizwhiz-logo.png';
import quizlogo from '../../assets/img/quiz-logo.png'
import CardPay from '../paymentMethodMiniComp/CardPay';
import CashAppPay from '../paymentMethodMiniComp/CashAppPay';
import BankPay from '../paymentMethodMiniComp/BankPay';
const Payment = () => {

    const [activePayment, setActivePayment] = useState('CardPay');

    const renderPaymentComponent = () => {
        switch (activePayment) {
            case 'CardPay':
                return <CardPay />;
            case 'CashAppPay':
                return <CashAppPay />;
            case 'BankPay':
                return <BankPay />;
            default:
                return null;
        }
    };
    return (
        <Container fluid>
            <Row className='pt-5 pb-5 '>

                {/* Left Column Content */}
                <Col md={6} className='text-center px-20'>

                    {/* This is for logo */}

                    <Row>
                        <Col>
                            <img src={logo} alt="logo" className='w-[110px] mx-auto' />
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <p className='text-xl text-gray-400 font-semibold'>Try Quizwhiz +</p>
                            <h2 className='font-bold text-5xl py-2'>5 days free</h2>
                            <p className='text-xl text-gray-400 font-semibold'> and then £ 699/month</p>
                        </Col>
                    </Row>


                    <Row>
                        <Col className='flex justify-center items-center max-w-[500px] mx-auto border-b border-gray-400'>
                            <img src={quizlogo} alt='quizlogo' className='w-[90px] mx-auto' />

                            <p>Quizwhiz + <span className='text-gray-400'> is a AI-powered Chrome Extension that helps students ace their tests</span> </p>
                        </Col>
                    </Row>


                    <Row>
                        <Col className='flex justify-between py-3 mx-auto'>
                            <p>Subtotal</p>
                            <p>£ 699</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='flex justify-between py-3 mx-auto'>
                            <button className='font-bold'>Add Promotion code</button>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='flex justify-between py-3 text-gray-400 border-b border-gray-400 mx-auto'>
                            <p>Tax</p>
                            <p>£ 0.00</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='flex justify-between py-3 mx-auto'>
                            <p>Total After Trail</p>
                            <p>£ 699</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='flex justify-between font-bold py-3 border-b border-gray-400 mx-auto'>
                            <p>Total due today</p>
                            <p>£ 0.00</p>
                        </Col>
                    </Row>

                </Col>


                {/* Right Column Content */}
                <Col md={6} className='px-20 text-sm py-20 bg-white text-black '>

                    <Row>
                        <Col>
                            <h1 className='text-2xl font-semibold'>Enter payment details</h1>
                            <FormGroup>
                                <Label for='paymentDetails' className='text-gray-400'>Email</Label>
                                <Input type='email' id='email' className='py-3 rounded-md' />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h1 className='text-xl font-semibold text-gray-400'>Payment method</h1>
                            {/* Payment Method buttons */}
                            <button
                                onClick={() => setActivePayment('CardPay')}
                                className={`bg-white ${activePayment === 'CardPay' ? 'text-black' : 'text-gray-400'} hover:text-black mx-1 w-[140px] text-left border rounded-lg border-black p-2`}
                            >
                                <FaCreditCard size={20} />
                                <p>Card</p>
                            </button>
                            <button
                                onClick={() => setActivePayment('CashAppPay')}
                                className={`bg-white ${activePayment === 'CashAppPay' ? 'text-black' : 'text-gray-400'} hover:text-black mx-1 w-[140px] text-left border rounded-lg border-black p-2`}
                            >
                                <AiTwotoneEuroCircle size={20} className='bg-green-400 rounded-full' />
                                <p>Cash App</p>
                            </button>
                            <button
                                onClick={() => setActivePayment('BankPay')}
                                className={`bg-white ${activePayment === 'BankPay' ? 'text-black' : 'text-gray-400'} hover:text-black mx-1 w-[140px] text-left border rounded-lg border-black p-2`}
                            >
                                <AiFillBank size={20} />
                                <p>Bank Payment</p>
                            </button>

                            {/* Display the active payment component */}
                            {renderPaymentComponent()}
                        </Col>

                    </Row>

                </Col>
            </Row>

        </Container>
    );
};

export default Payment;

