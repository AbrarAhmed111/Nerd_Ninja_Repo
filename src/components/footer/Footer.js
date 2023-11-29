import React from 'react';
import logoImg from '../../assets/img/nerdninjalogoforfooter.png';

const Footer = () => {
  return (
    <>
    <div  className='flex flex-col gap-y-6 items-start lg:gap-y-0 lg:flex-row gap-x-28 lg:items-center pt-10 pb-20 px-12 border-t'>
        <img src={logoImg} className='h-[40px] w-[160px]' />

    <div className='flex  items-start gap-x-44 flex-wrap'>

        <div className='flex flex-col'>
            <h1 className='font-bold text-2xl'>Product</h1>
            <ul className='flex flex-col gap-y-3 py-3'>
                <li>Pricing</li>
                <li>Chrome Store</li>
            </ul>
        </div>

        <div  className='flex flex-col'>
            <h1 className='font-bold text-2xl'>Company</h1>
            <ul className='flex flex-col gap-y-3 py-3'>
                <li>FAQ</li>
                <li>Contact US</li>
            </ul>
        </div>

        <div  className='flex flex-col'>
            <h1 className='font-bold text-2xl'>Other</h1>
            <ul className='flex flex-col gap-y-3 py-3'>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Academic Honesty Policy</li>
            </ul>
        </div >
    </div>



    </div>
    </>
  )
}

export default Footer