import React from 'react'
import logoImg from '../../assets/img/quiz-logo.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  return (
    <div className='flex md:flex-row flex-col py-10 md:gap-y-0 gap-y-3 md:items-center items-start justify-between px-10 pt-1 flex-wrap'>

      {/* Nav Left Items */}
      <div className='flex gap-y-3 xl:gap-y-0 md:flex-row flex-col items-start md:items-center gap-x-11 text-base md:text-lg flex-wrap'>
        <img src={logoImg} className='w-[150px]   ' alt="" />
        <div className='flex items-center gap-x-11 flex-wrap text-xl font-bold'>
          <a href='#faqs' className='text-decoration-none'><h3 className='hover:text-[#636ce4]'>How It Works</h3> </a>
          <a href='#demo' className='text-decoration-none'> <h3 className='hover:text-[#636ce4]'   >Try It Out</h3> </a>
          <a href='#reviews' className='text-decoration-none'> <h3 className='hover:text-[#636ce4]'   >Reviews</h3> </a>
          <a href='#' className='text-decoration-none '> <h3 className='hover:text-[#636ce4]'>Academic Honesty Policy</h3> </a>
        </div>
      </div>

      {/* Nav Right Items */}

      <div className='flex  gap-x-3 gap-y-3 md:py-0 py-2'>
        <Link to="/sign-up"><button className='px-7 border-2 border-[#636ce4] sm:px-10 sm:py-1  font-semibold rounded-full hover:bg-[#636ce4] hover:text-white'>Login</button></Link>

        <Link to="/"><button className='px-3 border-2 border-[#636ce4] bg-[#636ce4] sm:px-7 sm:py-1 font-semibold rounded-full hover:bg-transparent hover:text-white'>Get Started</button></Link>
      </div>

    </div>
  )
}

export default Header