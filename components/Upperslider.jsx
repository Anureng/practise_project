import React from 'react'

function Upperslider() {
    return (
        <div className='border flex flex-col  p-4 justify-center items-center space-y-24'>
            <div className=' mt-4  max-w-md p-5 space-y-3 flex flex-col justify-center items-centers'>
                <p className='font-bold text-3xl '>More than 100 designs for every moment and message</p>
                <p>Whether you’re selling stuff or just saying hi, our landing page and email templates help you get the job done</p>
            </div>
            <div className=' max-w-md p-5 space-y-3 flex flex-col justify-center items-center'>
                <p className='font-bold text-3xl '>See what our customers are saying</p>
                <p >Lots of people are talking about us on Trust Radius. Here are just a few of the extremely positive things.</p>
            </div>
            <div></div>
            <div className='  max-w-md p-5 space-y-5 flex flex-col justify-center items-center'>
                <p className='font-bold text-3xl '>Make the templates your own</p>
                <p>Sign up for a paid plan to access 100+ templates, build your own, or purchase a premium design from the Mailchimp Marketplace.</p>
                <button className='rounded-full border border-black p-3 w-36 bg-yellow-500'>Sign up</button>
            </div>
        </div>
    )
}

export default Upperslider