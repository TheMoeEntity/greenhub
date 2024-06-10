'use client'
import React, { useState } from 'react'
import logo from '../../../../public/images/Group-1.png'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const [dropDown, setDropDown] = useState(false)
    return (
        <div className='lg:absolutse top-0 left-0 w-full'>
            <div className="w-full py-5 gap-y-5 text-sm bg-[#151C1F] flex flex-col md:flex-row font-light text-[#CECECE] justify-center items-center md:justify-around">
                <div className='flex  flex-col md:flex-row gap-y-3 text-center gap-x-4'>
                    <span>(+234) 701 499 9228 </span>
                    <span className='hidden md:block'>|</span>
                    <span>
                        <a href="https://www.facebook.com/oluwaseun.adeyemi.3" target="_blank" rel="noreferrer" className='text-[#CECECE]'>greenhubunilag@gmail.com </a>
                    </span>
                </div>
                <div className='gap-x-7 flex text-xl'>
                    <a href="https://instagram.com/unilaggreenhub" target='_blank'><i className='fa-brands fa-facebook text-[#CECECE]'></i></a>
                    <a href="https://instagram.com/unilaggreenhub" target='_blank'><i className='fa-brands fa-twitter text-[#CECECE]'></i></a>
                    <a href="https://instagram.com/unilaggreenhub" target='_blank'><i className='fa-brands fa-instagram text-[#CECECE]'></i></a>
                    <a href="https://www.linkedin.com/company/unilag-green-hub/" target='_blank'><i className='fa-brands fa-linkedin text-[#CECECE]'></i></a>
                </div>
            </div>
            <div className='flex py-10 justify-around items-center bg-[#273527] text-white'>
                <Link href='/' className='w-[35%] md:w-[11%]'>
                    <Image
                        src={logo}
                        alt="UNILAG LOGO"
                        quality={100}
                        sizes={'100vw'}
                        className="object-cover w-full h-auto "
                    />
                </Link>
                <div className='md:flex hidden gap-x-8'>
                    <Link href={'/'} className='text-white'>Home</Link>
                    <Link href={'/about'} className='text-white'>About</Link>
                    <Link href={'/volunteer'} className='text-white'>Volunteer</Link>
                    <Link href={'/gallery'} className='text-white'>Gallery</Link>
                    <Link href={'/contact'} className='text-white'>Contact</Link>
                </div>
                <div className='md:hidden'>
                    <button onClick={() => setDropDown(!dropDown)}><i className='fas fa-bars text-3xl'></i></button>
                </div>
            </div>
            <div className={`lg:hidden transition-all duration-500 overflow-hidden ${dropDown ? 'max-h-96' : 'max-h-0'}`}>
                <div className='bg-[#151C1F] text-white w-full p-5 flex flex-col gap-8'>
                    <Link href={'/'} className='text-white'>Home</Link>
                    <Link href={'/about'} className='text-white'>About</Link>
                    <Link href={'/volunteer'} className='text-white'>Volunteer</Link>
                    <Link href={'/gallery'} className='text-white'>Gallery</Link>
                    <Link href={'/contact'} className='text-white'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Header