import Image from 'next/image'
import React from 'react'

function Fourthdown() {
    return (
        <div className=' space-y-28 flex items-center justify-center flex-col 
        
        '>
            <div className=' mt-9  p-4 space-y-3 max-w-sm flex items-center justify-center flex-col'>
                <p className='font-bold text-3xl '>Do it all with Mailchimp</p>
                <p className='items-center '>Bring everything together with our customizable templates for emails and landing pages.</p>
            </div>

            <div className=' lg:flex-row flex flex-col lg:space-x-28'>

                <div className='p-9 w-56 flex items-center justify-center flex-col  space-y-6 '>
                    <Image
                        height={150}
                        width={150}
                        src='/fisrt.webp' />
                    <p>CREATIVE ASSISTANT</p>
                    <p className='hover:underline cursor-pointer'>Make beautiful campaigns quickly</p>
                    <p>Custom designs ready to go with the click of a button.</p>
                    <p className=' bg-pink-200 hover:bg-yellow-500 cursor-pointer'>Start creating</p>
                </div>
                <div className='p-9  w-56 flex items-center justify-center flex-col  space-y-6 '>
                    <Image
                        height={150}
                        width={150}
                        src='/second.webp' />
                    <p>CREATIVE ASSISTANT</p>
                    <p className='hover:underline cursor-pointer'>Make beautiful campaigns quickly</p>
                    <p>Custom designs ready to go with the click of a button.</p>
                    <p className='bg-pink-200 hover:bg-yellow-500 cursor-pointer'>Start creating</p>
                </div>



                <div className=' p-9 w-56 flex items-center justify-center flex-col  space-y-6 '>
                    <Image
                        height={150}
                        width={150}
                        src='/third.webp' />
                    <p>CREATIVE ASSISTANT</p>
                    <p className='hover:underline cursor-pointer'>Make beautiful campaigns quickly</p>
                    <p>Custom designs ready to go with the click of a button.</p>
                    <p className='bg-pink-200 hover:bg-yellow-500 cursor-pointer'>Start creating</p>
                </div>
                <div className='p-9  w-56 flex items-center justify-center flex-col space-y-6 '>
                    <Image
                        height={150}
                        width={150}
                        src='/fourth.webp' />
                    <p>CREATIVE ASSISTANT</p>
                    <p className='hover:underline cursor-pointer'>Make beautiful campaigns quickly</p>
                    <p>Custom designs ready to go with the click of a button.</p>
                    <p className='bg-pink-200 hover:bg-yellow-500 cursor-pointer'>Start creating</p>
                </div>

            </div>
        </div>
    )
}

export default Fourthdown