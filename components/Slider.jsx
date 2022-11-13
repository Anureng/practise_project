import React from 'react'
import { BsStar } from "react-icons/Bs";
import { ImStarHalf } from "react-icons/im";
function Slider() {
    return (
        <div className='border flex border-black justify-center items-center'>
            <div className='border border-yellow-700 w-3/5 md:w-1/5 lg:w-1/5 p-5 space-y-8'>
                <div className='flex text-3xl space-x-2'>
                    <BsStar className='decoration-[#50d71e]' />
                    <BsStar className='decoration-[#50d71e]' />
                    <BsStar className='decoration-[#50d71e]' />
                    <BsStar className='decoration-[#50d71e]' />
                    <ImStarHalf />
                </div>
                <div className='space-y-8'>
                    <p className='text-xl font-bold'>Mailchimp is the best for small business newsletters</p>
                    <p className='text-xl'>It allows you to easily design the newsletter and offers different templates. Very easy to drop in t…</p>
                    <p className='underline underline-offset-1 cursor-pointer inline-block hover:bg-yellow-300'>Read Full Review</p>
                    <p className='font-light'>Michelle Messenger Garrett Garrett Public Relations</p>
                </div>
            </div>
        </div>
    )
}

export default Slider