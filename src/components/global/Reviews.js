import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import headingimage from '../../assets/img/headingimg.png';
import ReactStars from "react-rating-stars-component";
import user1 from '../../assets/img/maya.jpeg';
import user2 from '../../assets/img/jeny.avif';
import user3 from '../../assets/img/nate.jpeg';

const Reviews = () => {
    const imagePaths = [
        {
            id: 1,
            profilePhoto: user1,
            rating: 4, // Provide the rating value as a number
            name: 'Maya',
            description: 'USC, freshman',
            grade: 'A+',
            subject: 'Chemisty',
            feedback:
                "QuizWhiz: Elevate your knowledge with the power of QuizWhiz! Unleash your intellect, conquer challenges, and become a Quiz Master. Dive into a world of limitless learning and test your wisdom with QuizWhiz. Ignite your curiosity and embark on a journey of admirable achievements. Join QuizWhiz today and let the quest for knowledge begin!"

        },
        {
            id: 2,
            profilePhoto: user2,
            rating: 5, // Provide the rating value as a number
            name: 'Jeny',
            description: 'UT Austin, Sophomore',
            grade: 'A',
            subject: 'Physics',
            feedback:
                "QuizWhiz: Elevate your knowledge with the power of QuizWhiz! Unleash your intellect, conquer challenges, and become a Quiz Master. Dive into a world of limitless learning and test your wisdom with QuizWhiz. Ignite your curiosity and embark on a journey of admirable achievements. Join QuizWhiz today and let the quest for knowledge begin!"

        },
        {
            id: 3,
            profilePhoto: user3,
            rating: 3, // Provide the rating value as a number
            name: 'Nate',
            description: 'High School senior',
            grade: 'A+',
            subject: 'Mathematics',
            feedback:
                "QuizWhiz: Elevate your knowledge with the power of QuizWhiz! Unleash your intellect, conquer challenges, and become a Quiz Master. Dive into a world of limitless learning and test your wisdom with QuizWhiz. Ignite your curiosity and embark on a journey of admirable achievements. Join QuizWhiz today and let the quest for knowledge begin!"

        },
    ];

    return (
        <section id='reviews'>
        <Container fluid className='text-white'>

            <h1 className='my-5 mx-auto text-center text-2xl font-bold lg:text-6xl reviews-heading flex justify-center items-center'>
                Join the <span className='text-[#636ce4] mx-1'> A+</span> Club
                <img src={headingimage} alt="Heading" className='heading-img-width' />
            </h1>


            <Row className="flex justify-center image-border-style text-sm w-full ">
                {imagePaths.map((item) => (


                    <Col lg={4} md={6} sm={12} className="mb-2 w-[300px] border rounded-2xl py-3 review-sec-border mx-1" key={item.id}>



                        <div className='d-flex justify-content-between'>
                            <img src={item.profilePhoto} alt="Heading" className='w-[60px] h-[58px] rounded-full' />
                            <p>
                                <ReactStars
                                    count={5}
                                    value={item.rating}
                                    size={30}
                                    activeColor="#FFD700"
                                    isHalf={false}
                                    edit={false}
                                />
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h1 className='font-bold text-lg'>{item.name}</h1>
                                <p className='font-semibold'>{item.description}</p>
                            </div>
                            <div className='text-center font-bold bg-[#636ce4] px-3 my-3 rounded-lg'>
                                <p>{item.grade}</p>
                                <p>{item.subject}</p>
                            </div>
                        </div>
                        <div>
                            <p>{item.feedback}</p>
                        </div>

                    </Col>

                ))}
            </Row>


            <h2 className='my-4 text-center text-4xl font-bold'>over 10,000+ students</h2>

        </Container>
        </section>
    );
}

export default Reviews;
