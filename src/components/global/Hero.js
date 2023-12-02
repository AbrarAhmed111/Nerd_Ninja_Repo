import React from 'react';
import gif from '../../assets/img/tvGif.gif';
import tvbtm from '../../assets/img/tvBottom.png';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center px-6 py-0 lg:flex-row lg:py-10 xl:py-36 gap-x-0 gap-y-5 xl:gap-y-0 xl:gap-x-44'>
      <div className='  flex flex-col sm:w-[83%] md:w-[76%] lg:w-[38%]'>
        <div className='border-[20px] border-black'><img src={gif} className='' alt="" /></div>
        <img src={tvbtm} className='' alt="" />
      </div>

      <div className='flex flex-col items-start justify-center w-full py-4 lg:w-auto'>
        <h1 className='text-5xl font-bold lg:text-7xl'>Learn 3x Faster</h1>
        <h3 className='text-2xl lg:text-3xl font-semibold text-[#CACCC9]'>Your Personal Al Problem Solver</h3>
        <div className='flex flex-col py-4 ml-5 text-2xl font-semibold gap-y-3'>
          <h5>AI-powered learning</h5>
          <h5>Works on Canvas + Blackboard</h5>
          <h5>9,572+ Students Helped</h5>
        </div>
        <button className='p-3 text-2xl font-bold bg-[#636ce4]  rounded-lg hover:bg-[#6167b8]'>Add to Chrome</button>
      </div>


    </div>
  )
}

export default Hero