import {React, useState} from 'react'
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

const Faq = () => {
    const [faqToggler, setFaqToggler] = useState(false)
    const [faq, setFaq] = useState(         //Faq Array Of Object
        [
            {
                id: 0,
                question: 'Is nerdNinja a substitute for learning?',
                answer: 'Absolutely not! nerdNinja should always be used in supplement to studying to help see how your answer compares to AI',
                isOpen: false,
            },

            {
                id: 1,
                question: 'How does nerdNinja work?',
                answer: 'nerdNinja is a highly sophisticated artifical intelligence algorithm. By feeding it large amounts of data, we can accurately predict answers to your questions.',
                isOpen: false,
            },

            {
                id: 2,
                question: 'Is nerdNinja accurate?',
                answer: 'Yes! Every answer generated by nerdNinja is generated by our sophisticated AI. We will never recommend an answer that we are not confident in.',
                isOpen: false,
            },

            {
                id: 3,
                question: 'Will my answers be flagged as plagiarism?',
                answer: "No! Our artifical intelligence algorithms generate 100% unique answers that cannot be found anywhere on the internet.",
                isOpen: false,
            },

            {
                id: 4,
                question: 'Do you offer refunds?',
                answer: "Absolutely! If you're not satisfied with the service, we will provide a full 100% refund.",
                isOpen: false,
            },
        ]);



    const toggleHandler = (id) =>
    {
        
        setFaq(prevState =>
            prevState.map(item => ({
              ...item,
              isOpen: item.id === id ? !item.isOpen : false,
            }))
            );
    }

  return (
    <div className='flex flex-col items-center justify-center w-full py-14 '>
        <h1 className='mb-5 font-bold text-7xl'>I bet you're wondering...</h1>
        {faq.map((contain) => ( <div key={contain.id} onClick={() => toggleHandler(contain.id)} className={`${contain.isOpen ? 'h-[130px]' : 'h-[77px]' } ${contain.id > 0 ? '' : 'border-t'} transition-all duration-200 cursor-pointer flex flex-col   overflow-hidden w-[67%]  py-4 pb-5  border-[#a1a1a1] border-b text-2xl font-semibold`}>
            <h1 className='flex items-end justify-between mb-4'><div className='flex items-end gap-x-2'><CiCircleQuestion/>{contain.question}</div> <span><IoIosArrowBack className={`${faqToggler ? '-rotate-90' : ''}`} /></span></h1>
            <p className='ml-3 text-base'>{contain.answer}</p>

        </div>
        ))}

    </div>
  )
}

export default Faq