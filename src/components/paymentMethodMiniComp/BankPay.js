import React from 'react';
import { Col, Row, Container, Form, FormGroup, Label, Input} from 'reactstrap';

const BankPay = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Form>

                        <FormGroup>
                            <Label for='fullName'>Full Name:</Label>
                            <Input type='text' id='fullName' />
                        </FormGroup>

                        <FormGroup>
                            <Label for='country'>Billing Address:</Label>
                            <Input type='select' id='country'>
                                <option>Pakistan</option>
                                {/* Add more countries as needed */}
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Input type='text' id='addressLine1' placeholder='Address line 1' />
                        </FormGroup>

                        <FormGroup>
                            <Input type='text' id='addressLine2' placeholder='Address line 2' />
                        </FormGroup>

                        <FormGroup>
                            <Input type='text' id='suburb' placeholder='Suburb' />
                        </FormGroup>

                        <FormGroup>
                            <Input type='text' id='city' placeholder='City' />
                        </FormGroup>

                        <FormGroup>
                            <Input type='text' id='postalCode' placeholder='Postal code' />
                        </FormGroup>

                        <Row>
                            <Col>
                            
                                <FormGroup>
                                    <Label for='bankAccount'>Bank account:</Label>
                                    <Input type='text' id='bankAccount' placeholder='Search for your bank' />
                                </FormGroup>
                            </Col>
                        </Row>


                        <p>Enter bank details manually instead (takes 1-2 business days)</p>


                        <button className='bg-blue-600 w-full p-3 text-xl font-semibold rounded-lg text-white my-3'>Start Trail</button>

                        <p>
                            After your trial ends, you will be charged £ 699 per month starting December 12, 2023.
                            You can always cancel before then.
                        </p>

                        <p>By clicking Start trial you agree to authorize payments pursuant to these terms.</p>

                        
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default BankPay;
