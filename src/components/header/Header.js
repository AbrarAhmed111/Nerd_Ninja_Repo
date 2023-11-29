import React from 'react'
import logoImg from '../../assets/img/nerdninjalogo.png';

const Header = () => {
  return (
    <div className='flex md:flex-row flex-col py-10 md:gap-y-0 gap-y-3 md:items-center items-start justify-between px-10 pt-16 flex-wrap'>
    
    {/* Nav Left Items */}
    <div className='flex gap-y-3 xl:gap-y-0 md:flex-row flex-col items-start md:items-center gap-x-11 text-base md:text-lg flex-wrap'>
        <img src={logoImg} className='h-10 mr-2' alt="" />
        <div className='flex items-center gap-x-11 flex-wrap'>
        <h3>How It Works</h3>
        <h3>Try It Out</h3>
        <h3>Reviews</h3>
        <h3>Academic Honesty Policy</h3>
        </div>
    </div>

    {/* Nav Right Items */}

    <div className='flex  gap-x-3 gap-y-3 md:py-0 py-2'>
        <button className='px-7 border-2 border-green-600 sm:px-10 sm:py-1  font-semibold rounded-full'>Login</button>
        <button className='px-3 border-2 border-green-600 bg-green-600 sm:px-7 sm:py-1 font-semibold rounded-full'>Get Started</button>
    </div>

    </div>
  )
}

export default Header