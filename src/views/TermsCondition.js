import React,{useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap';
const TermsandConditons = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <Container className='py-10'>
            <Row>
                <Col>
                    <h1 className='text-3xl lg:text-5xl font-bold text-center'>Terms and Conditions</h1>
                    <p className='text-2xl font-bold  text-center py-2'>Dec 12, 2023</p>
                    <p className='text-xl font-semibold text-center pt-3 pb-20'>Welcome to our Privacy Policy at [Your Company Name]. Your privacy is of utmost importance to us, and we are committed to safeguarding your personal information. This policy outlines how we collect, use, disclose, and protect the data you share with us. By using our services, you agree to the terms outlined in this document. We strive to be transparent about our data practices and provide you with control over your information. Our Privacy Policy is designed to inform you about the type of data we collect, why we collect it, and how it enhances your experience with our services. We adhere to applicable privacy laws and regulations to ensure the confidentiality and security of your information</p>





                    <h2 className='text-3xl font-bold'> Information We Collect </h2>


                    <h3 className='text-2xl font-bold'> Personal Information </h3>
                    <p className='text-xl'>When you sign up for Quizwhiz, we may collect personal information such as your name, email address, and other details you provide during the registration process.</p>


                    <h3 className='text-2xl font-bold'> Data Usage</h3>
                    <p>  We automatically collect information about how you use Quizwhiz, including the quizzes you take, your quiz scores, and the duration of your interactions with our platform.</p>


                    <h3 className='text-2xl font-bold'> Cookies and Tracking Technologies </h3>
                    <p className='text-xl'>Quizwhiz uses cookies and similar technologies to enhance your experience and collect information about your browsing activities.</p>
                    Quizwhiz uses cookies and similar technologies to enhance your experience and collect information about your browsing activities.

                    <h3 className='text-2xl font-bold py-3'> How we use your information </h3>
                    <p className='text-xl'> We use the collected information to: <br />

                        Provide and personalize our services.<br />
                        Analyze usage patterns to improve our platform.<br />
                        Send you relevant updates, promotions, and notifications.<br />
                        Ensure the security of your account.</p>
                        <h3 className='text-2xl font-bold py-3'> Infotmation Security </h3>
                        <p className='text-xl py-2'> 
                        Quizwhiz does not sell or share your personal information with third parties without your consent, except as required by law.
                        </p>
                    

                        <h3 className='text-2xl font-bold py-3'> Data Security</h3>
                        <p className='text-xl py-2'>  We implement industry-standard security measures to protect your information. However, no online platform can guarantee absolute security.</p>
                   

                        <h3 className='text-2xl font-bold py-3'> Your Choice</h3>
                        <p className='text-xl py-2'>You can control the information you provide to Quizwhiz and manage your communication preferences through your account settings.</p>
                    

                    

                        <h3 className='text-2xl font-bold py-3'> Contact Us</h3>
                        <p className='text-xl py-2'>If you have questions about this Privacy Policy, please contact us at
                        <span className='text-blue-700 font-semibold'>  <br/><a href='#'>contact@quizwhiz.com</a></span></p>
                    

                    <p className='text-lg py-2'>Please note that this is a generic and fictional privacy policy. It's important to tailor a privacy policy to accurately reflect the specific practices of a real service and comply with applicable laws and regulations.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default TermsandConditons;
