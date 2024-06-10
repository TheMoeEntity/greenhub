'use client'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='flex text-center flex-col gap-0 items-center justify-center min-h-screen'>
            <h1 className='text-[120px] md:text-[160px] font-semibold'>
                4<span className='text-[#71cd6c]'>0</span>4
            </h1>
            <div className="flex flex-col items-center gap-8">
                <h2 className='text-3xl font-semibold'>OOPS! Nothing Was Found</h2>
                <p className='text-center px-4 md:w-[60%] text-xl mx-auto'>
                    Oops! It Could Be You Or Us, There Is No Page Here. It Might Have
                    Been Moved Or Deleted. Back To Home
                </p>
                <Link href={'/'} className='bg-[#71cd6c] w-fit text-white px-5 py-5'>GO BACK HOME &rarr;</Link>
            </div>
        </div>
    )
}

export default NotFound