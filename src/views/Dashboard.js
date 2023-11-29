import React from 'react'
import Hero from '../components/global/Hero';
import Faq from '../components/global/Faq';
import Demo from '../components/global/Demo';
import Reviews from '../components/global/Reviews';
import Pricing from '../components/global/Pricing';
import Header from '../components/header/Header';
const Dashboard = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Faq/>
    <Demo/>
    <Reviews/>
    <Pricing/>
    </>
  )
}

export default Dashboard