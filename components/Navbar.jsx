import Image from 'next/image'
import React from 'react'


function Navbar() {
    return (
        <div className='bg-[#D8EACC] items-center'>
            <div className=' justify-between flex items-center'>
                <div className=' border border-black p-4 hidden'>
                    <ul className='flex gap-4 '>
                        <li>Products</li>
                        <li>Resources</li>
                        <li>Inspiration</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="hamburger ml-4  cursor-pointer">
                    <div className="line h-[0.15rem] w-7 mt-1.5 bg-black"></div>
                    <div className="line  cursor-pointer h-[0.15rem] w-7 mt-1.5 bg-black"></div>
                    <div className="line  cursor-pointer h-[0.15rem] w-7 mt-1.5 bg-black"></div>
                </div>
                <div>
                    <p>Logo Name</p>
                </div>
                <div className='flex gap-9 p-3 border '>
                    <p className='hidden sm:block'>Sales: <br />
                        +1 (800) 315-5939
                    </p>
                    <p className='mt-2 border border-black rounded-3xl
                px-5 py-2'>login</p>
                    <p className='hidden'>Signin</p>
                </div>
            </div>
            <div className='flex 
            flex-col lg:flex-row items-center  justify-center space-y-12 md:space-x-12 mt-6'>
                <div className='border   w-4/5 md:w-25% lg:w-5/12 p-8 space-y-12 mt-9 ' >
                    <p className='font-bold'>TEMPLATES</p>
                    <h1 className='text-sm md:text-5xl'>
                        Get beautiful emails and  landing pages in just a few clicks</h1>
                    <p className='text-xl sm:text-sm'>Our templates include all the elements you <br /> need to easily launch a professional‑looking  campaign in no time.</p>
                    <button className='mt-2 border border-black rounded-4xl
                 px-5 py-2 bg-yellow-400'>
                        Sign up Now</button>
                    <p className='font-light bg-pink-300 w-fit'>No credit card required</p>
                </div>
                <div>
                    <Image className=''
                        width="600"
                        height="600"
                        src='/Left_Navbar.webp'>
                    </Image>
                </div>
            </div>
        </div>
    )
}

export default Navbar