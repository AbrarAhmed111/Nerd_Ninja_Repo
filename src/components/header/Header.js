import { Container, Row, Col, Button } from 'reactstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import logoImg from '../../assets/img/quizwhiz-logo.png';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container fluid>
      <div className='text-white'>
        <div className='flex items-center justify-between'>
          {/* right side of the navbar */}
          <div className='flex items-center gap-x-3 hover:cursor-pointer'>
            <div className='text-white'>
              <img src={logoImg} alt='logo' className='w-[110px] lg:w-[270px]' />
            </div>
          </div>

          {/* middle of the navbar */}
          <div className='hidden lg:block font-semibold'>
            <ul className='flex gap-6 hover:cursor-pointer'>

              <a href='#faqs' className='text-decoration-none'><h3 className='hover:text-[#636ce4] text-lg'>How It Works</h3> </a>
              <a href='#demo' className='text-decoration-none'> <h3 className='hover:text-[#636ce4] text-lg'   >Try It Out</h3> </a>
              <a href='#reviews' className='text-decoration-none'> <h3 className='hover:text-[#636ce4] text-lg'   >Reviews</h3> </a>
              <a href='#' className='text-decoration-none '> <h3 className='hover:text-[#636ce4] text-lg'>Academic Honesty Policy</h3> </a>
            </ul>
          </div>

          {/* right side of the navbar */}
          <div className='hidden lg:block  font-semibold'>
            <div className='hidden lg:block d-xl-flex'>
              <div className='flex sm:flex-col lg:flex lg:flex-row gap-x-3 gap-y-3 md:py-0 py-2'>
                <Link to="/sign-up"><button className='px-9 border-2 border-[#636ce4] sm:px-10 sm:py-2  font-semibold rounded-full hover:bg-[#636ce4] hover:text-white my-1'>Login</button></Link>

                <Link to="/"><button className=' px-3 border-2 border-[#636ce4] bg-[#636ce4] sm:px-7 sm:py-2 font-semibold rounded-full hover:bg-transparent hover:text-white my-1'>Get Started</button></Link>
              </div>
            </div>

          </div>

          {/* menu button */}
          <div className='block cursor-pointer lg:hidden'>
            {toggle ? (
              <AiOutlineCloseCircle
                onClick={() => setToggle(!toggle)}
                className='mr-2 shadow-sm border rounded-full hover:text-white'
                size={30}
              />
            ) : (
              <AiOutlineMenu
                onClick={() => setToggle(!toggle)}
                className='mr-2 shadow-sm border rounded hover:text-white'
                size={30}
              />
            )}


            <ul className={` fixed h-full w-full md:h-[390px] bg-[#070d2b] z-10 top-[75px] lg:hidden
                 ${toggle ? 'left-[0]' : 'left-[-100%]'} px-8 py-8 font-bold `}>

              {/* <div className='flex items-center gap-x-11 flex-wrap text-xl font-bold'> */}
              <a href='#faqs' className='text-decoration-none'><h3 className='hover:text-[#636ce4] py-1'>How It Works</h3> </a>
              <a href='#demo' className='text-decoration-none'> <h3 className='hover:text-[#636ce4] py-1'   >Try It Out</h3> </a>
              <a href='#reviews' className='text-decoration-none'> <h3 className='hover:text-[#636ce4] py-1'   >Reviews</h3> </a>
              <a href='#' className='text-decoration-none '> <h3 className='hover:text-[#636ce4] py-1'>Academic Honesty Policy</h3> </a>
              {/* </div> */}

              <div className='sm:flex sm:flex-col lg:flex  gap-x-3 gap-y-3 md:py-0 py-2'>
                <Link to="/sign-up"><button className='px-9 border-2 border-[#636ce4] sm:px-10 sm:py-2  font-semibold rounded-full hover:bg-[#636ce4] hover:text-white block my-1'>Login</button></Link>

                <Link to="/"><button className=' px-3 border-2 border-[#636ce4] bg-[#636ce4] sm:px-7 sm:py-2 font-semibold rounded-full hover:bg-transparent hover:text-white my-1'>Get Started</button></Link>
              </div>
            </ul>
          </div>
        </div>
      </div>


    </Container>


  );
};

export default Header;