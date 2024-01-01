import React from 'react';
import { Col, Row, Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const CardPay = () => {
  return (
    <Container>
      <Row>
        <Col className='mb-3'>
          <Form>
            {/* Card Information Section */}
            

            <FormGroup className='py-3 font-semibold'>
              <Label for='cardNumber'>Card Information</Label>
              <Input type='text' id='cardNumber' placeholder='1234 1234 1234 1234' />
            </FormGroup>

            <FormGroup>
              <Label for='cardType'>Card Type:</Label>
              <Input type='select' id='cardType'>
                <option>Visa</option>
                <option>MasterCard</option>
                <option>American Express</option>
                <option>UnionPay</option>
                <option>JCB</option>
                <option>Discover</option>
                <option>Diners Club</option>
              </Input>
            </FormGroup>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='expiryDate'>MM / YY:</Label>
                  <Input type='text' id='expiryDate' placeholder='MM / YY' />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for='cvc'>CVC:</Label>
                  <Input type='text' id='cvc' placeholder='CVC' />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label for='cardholderName'>Cardholder Name:</Label>
              <Input type='text' id='cardholderName' placeholder='Full name on card' />
            </FormGroup>

            {/* Billing Address Section */}
            <Row className='mb-3'>
              <Col>
                <h1 className='text-2xl font-semibold'>Billing Address</h1>
              </Col>
            </Row>

            <FormGroup>
              <Label for='country'>Country:</Label>
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

            <Row form>
              <Col md={6}>
                <FormGroup>
                 
                  <Input type='text' id='suburb' placeholder='Suburb' />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  
                  <Input type='text' id='city' placeholder='City' />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              
              <Input type='text' id='postalCode' placeholder='Postal code' />
            </FormGroup>

            {/* Trial Information Section */}

            <Row>
  <Col>
    <FormGroup check>
      <Label check>
        <Input type='checkbox' id='saveInformation' />
        {' '}
        Surely save my information for 1-click checkout
      </Label>
    </FormGroup>
    <p className='text-sm text-gray-400'>
      Pay faster for Quizwhiz and everywhere the link is accepted.
    </p>
  </Col>
</Row>


            <button className='bg-blue-600 w-full p-3 text-xl font-semibold rounded-lg text-white my-3'>Start Trail</button>

            <p>
              After your trial ends, you will be charged  £ 699 per month starting December 12, 2023.
              You can always cancel before then.
            </p>

            
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CardPay;
