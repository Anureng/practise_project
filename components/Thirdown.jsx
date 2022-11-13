import Image from 'next/image'
import React from 'react'

function Thirdown() {
    return (
        <div className='p-8 bg-[#D8EACC] flex flex-col
         justify-center items-center xl:flex-row space-y-7 md:justify-evenly'>
            <div className='xl:order-last'>
                <Image
                    width={500}
                    height={500}
                    src='/Right_photo.webp'
                    className='lg:w-fit xl:max-w-md'
                />
            </div>
            <div className=' p-3 space-y-7 max-w-md lg:max-w-3xl xl:max-w-md'>
                <p className='text-3xl'>Look like a pro with premium email designs</p>
                <p className='text-lg'>Whether you need a beautiful out-of-the-box solution, more robust customization,
                    or something in between,  find the right fit in the Mailchimp
                    Marketplace.</p>
                <button className='border border-black p-3 rounded-full'>Visit the Marketplace</button>
            </div>
        </div>
    )
}

export default Thirdown