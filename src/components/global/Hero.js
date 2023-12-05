// import React from 'react';
// import gif from '../../assets/img/tvGif.gif';
// import tvbtm from '../../assets/img/tvBottom.png';

// const Hero = () => {
//   return (
//     <div className='flex flex-col items-center justify-center px-6 py-0 lg:flex-row lg:py-10 xl:py-36 gap-x-0 gap-y-5 xl:gap-y-0 xl:gap-x-44'>
//       <div className='  flex flex-col sm:w-[83%] md:w-[76%] lg:w-[38%]'>
//         <div className='border-[20px] border-black'><img src={gif} className='' alt="" /></div>
//         <img src={tvbtm} className='' alt="" />
//       </div>

//       <div className='flex flex-col items-start justify-center w-full py-4 lg:w-auto'>
//         <h1 className='text-5xl font-bold lg:text-7xl'>Learn 3x Faster</h1>
//         <h3 className='text-2xl lg:text-3xl font-semibold text-[#CACCC9]'>Your Personal Al Problem Solver</h3>
//         <div className='flex flex-col py-4 lg:ml-5 text-2xl font-semibold gap-y-3 md:text-center'>
//           <h5>AI-powered learning</h5>
//           <h5>Works on Canvas + Blackboard</h5>
//           <h5>9,572+ Students Helped</h5>
//         </div>
//         <button className='p-3 text-2xl font-bold bg-[#636ce4]  rounded-lg hover:bg-[#484d96]'>Add to Chrome</button>
//       </div>


//     </div>
//   )
// }

// export default Hero

// import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import gif from '../../assets/img/tvGif.gif';
// import tvbtm from '../../assets/img/tvBottom.png';

// const Hero = () => {
//   return (
//     <Container  fluid className='mx-auto flex py-0 lg:flex-row lg:py-10 xl:py-36  gap-y-5 xl:gap-y-0 lg:gap-x-20 my-10'>
//       <Col sm={12} lg={6} className='flex flex-col lg:px-28'>
//         <div className='border-[20px] border-black'>
//           <img src={gif} className='img-fluid ' alt="" />
//         </div>
//         <img src={tvbtm} className='' alt="" />
//       </Col>

//       <Col className='flex flex-col items-start justify-center w-full py-4 lg:w-auto'>
//         <h1 className='text-5xl font-bold lg:text-5xl'>Learn 3x Faster</h1>
//         <h3 className='text-2xl lg:text-3xl font-semibold text-[#CACCC9]'>Your Personal Al Problem Solver</h3>
//         <div className='flex flex-col py-4 lg:ml-5 text-2xl font-semibold gap-y-3 md:text-center lg:text-start'>
//           <h5>AI-powered learning</h5>
//           <h5>Works on Canvas + Blackboard</h5>
//           <h5>9,572+ Students Helped</h5>
//         </div>
//         <button className='p-3 text-2xl font-bold bg-[#636ce4] rounded-lg hover:bg-[#484d96]'>Add to Chrome</button>
//       </Col>
//     </Container>
//   );
// };

// export default Hero;


import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import gif from '../../assets/img/tvGif.gif';
import tvbtm from '../../assets/img/tvBottom.png';

const Hero = () => {
  return (
    <Container fluid className='mx-auto py-0 lg:py-10 xl:py-36 my-10'>
      <Row>
        <Col lg='6' className='flex flex-col sm:px-4 md:px-28 lg:px-28'>
          <div className='border-[20px] border-black'>
            <img src={gif} className='img-fluid' alt="" />
          </div>
          <img src={tvbtm} alt="" />
        </Col>

        <Col lg='6' className='flex flex-col items-start justify-center py-4'>
          <h1 className='text-5xl font-bold lg:text-5xl'>Learn 3x Faster</h1>
          <h3 className='text-2xl lg:text-3xl font-semibold text-[#CACCC9]'>Your Personal AI Problem Solver</h3>
          <div className='flex flex-col py-4 text-2xl font-semibold gap-y-3 md:text-center lg:text-start'>
            <h5>AI-powered learning</h5>
            <h5>Works on Canvas + Blackboard</h5>
            <h5>9,572+ Students Helped</h5>
          </div>
          <button className='p-3 text-2xl font-bold bg-[#636ce4] rounded-lg hover:bg-[#484d96]'>Add to Chrome</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
