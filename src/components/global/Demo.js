import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import finger from '../../assets/img/finger.dbcd4bebdcd2a7af8baa.png';
import quizlogo from '../../assets/img/quiz-logo.png';
const Demo = () => {
  const Quiz = [
    {
      id: 1,
      question: 'x2 + y2 = 153y = -4x',
      statement: 'If (x, y) is a solution to the system of equations above, what is the value of x2 ?',
      options: ['51', '3', '9', '-144'],
    },
    {
      id: 2,
      question: 'In "Catcher in the Rye"',
      statement: 'Why was not Holden at the big fooball game?',
      options: ['He could not afford the ticket', 'He was on academic probation', 'He has to see his history teacher', 'He had to finish a term paper that was due the next Monday.'],
    },
  ];

  return (

    <section id='demo'>
    <Container fluid className='text-center text-white'>
      <Row>
        <Col>
          <h1 className='py-3  text-xl lg:text-6xl font-bold flex justify-center items-center w-auto'>
            Try it for yourself
            <img src={finger} alt="Heading" className='mx-1 md:mx-4 mt-4 heading-img-width' />
          </h1>
        </Col>
      </Row>

      <Row>
        {Quiz.map((question, index) => (
          <Col key={index} md={6}>
            <Row>
              <Col className='py-4 min-h-[400px] h-auto mx-[40px] my-2 tryyourself-border text-start text-xl '>
                <p className='px-2 d-flex justify-content-between'>{question.statement} 
                <img src={quizlogo} alt="Heading" className='img-fluid quiz-img-width bot-img-width' />
                </p>
                <p className='px-2'>{question.question}</p>

                <Form className='mx-4'>
                  {question.options.map((option, optionIndex) => (
                     <FormGroup key={optionIndex} check>
                      <Label check>
                        <Input type="radio" name={`question_${index}`} id={`option_${index}_${optionIndex}`} value={option} />
                        {option}
                      </Label>
                    </FormGroup>
                  ))}
                </Form>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
  );
}

export default Demo;