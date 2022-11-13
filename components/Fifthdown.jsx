import React from 'react'
import { ImStarHalf } from "react-icons/im";
import { AiOutlineArrowRight } from "react-icons/ai";
function Fifthdown() {
    return (
        <div className=' flex flex-col justify-center items-center
         space-y-12 xl:flex-row lg:space-x-28'>
            <div className=' text-4xl max-w-sm p-4 mt-7 '>
                < p > Want to learn more about email ? It's kind of our specialty.</p>
            </div >
            <div className='mr-24 sm:mr-0 md:mr-0 sm:w-full p-5 space-y-3 text-2xl'>

                <p className='flex '>
                    Types of Email Templates
                    <AiOutlineArrowRight className='bg-[#FFE01B]  rounded-full text-3xl' />
                </p>
                <p className='flex'>
                    Types of Landing Page Templates
                    <AiOutlineArrowRight className='bg-[#FFE01B] rounded-full text-3xl' />
                </p>
                <p className='flex'>
                    Templates vs. Campaign
                    <AiOutlineArrowRight className='bg-[#FFE01B] rounded-full text-3xl' />
                </p>
                <p className='flex'>
                    Use the Creative Assistant
                    <AiOutlineArrowRight className='bg-[#FFE01B] rounded-full text-3xl' />
                </p>

            </div>
        </div >
    )
}

export default Fifthdown