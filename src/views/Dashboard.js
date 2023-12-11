import React, {useEffect} from 'react'
import Hero from '../components/global/Hero';
import Faq from '../components/global/Faq';
import Demo from '../components/global/Demo';
import Reviews from '../components/global/Reviews';
import Pricing from '../components/global/Pricing';
import MyAccount from '../components/global/MyAccount';
const Dashboard = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Hero/>
    <Faq/>
    <Demo/>
    <Reviews/>
    <Pricing/>
    <MyAccount/>
    </>
  )
}

export default Dashboard