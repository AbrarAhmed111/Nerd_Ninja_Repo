import React from 'react';
import { Col, Row, Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { MdOutlineSendToMobile } from "react-icons/md";
const CashAppPay = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            {/* Name Section */}
           

            <FormGroup>
            <Label for='paymentDetails' className='text-gray-400 py-2'>
                  Name
                </Label>
              <Input type='text' id='fullName'/>
            </FormGroup>

            {/* Billing Address Section */}
            <Row className='mb-3'>
              <Col>
                <h1 className='text-2xl font-semibold'>Billing Address</h1>
              </Col>
            </Row>

            <FormGroup>ner
              <Input type='select' id='country'>
                <option>United States</option>
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
              <Input type='text' id='city' placeholder='City' />
            </FormGroup>

            <FormGroup>

              <Input type='text' id='zipCode' placeholder='ZIP Code' />
            </FormGroup>

            <Row form>
              <Col md={6}>
                <FormGroup>
                
                  <Input type='text' id='state' placeholder='State' />
                </FormGroup>
              </Col>
            </Row>

            {/* QR Code Section */}
            <Row className='mb-3'>
              <Col className='flex border py-3 rounded-md'>
              <MdOutlineSendToMobile size={30} />
                <h1 className='mx-2'>After submitting your order, scan the QR code using Cash App Pay.</h1>
              </Col>
            </Row>

            <button className='bg-blue-600 w-full p-3 text-xl font-semibold rounded-lg text-white my-3'>Reveal QR Code</button>
        
            {/* Trial Information Section */}
            <Row className='mb-3'>
              <Col>
                <h1 className=''>After your trial ends, you will be charged  £ 699 per month starting December 12, 2023.</h1>
              </Col>
            </Row>

            <p>You can always cancel before then.</p>

            <p>
              By continuing, you authorize Quizwhize to debit your Cash App account for this payment and future payments
              in accordance with Quizwhiz's terms, until this authorization is revoked. You can change this anytime in
              your Cash App Settings.
            </p>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CashAppPay;
