import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const MyAccount = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className='mx-auto pt-5'>
          <h1 className='text-4xl font-bold text-center pt-3 pb-20'>My Account</h1>
          <h3 className='text-xl font-bold py-3'>Account Info:</h3>
          <p className='font-bold lg:text-lg'>
            Email Address: <span className='lg:ml-5'>muhammadzeshan.se950@gmail.com</span>
          </p>

          <Row className='mx-auto text-center'>
            <Col>
              <Link to='/subscription'>
                <Button color='primary' className='py-3 my-5 w-75 font-bold text-xl rounded-lg'>
                  Subscribe &gt;&gt;
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MyAccount
