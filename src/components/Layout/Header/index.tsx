import React from 'react'
import logo from '../../../../public/images/Group-1.png'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='lg:absolutse top-0 left-0 w-full'>
            <div className="w-full py-5 gap-y-5 text-sm bg-[#151C1F] flex flex-col md:flex-row font-light text-[#CECECE] justify-center items-center md:justify-around">
                <div className='flex flex-col md:flex-row gap-y-3 text-center gap-x-4'>
                    <span>Phone: (+234) 701 499 9228 </span>
                    <span>|</span>
                    <span>
                        <a href="https://www.facebook.com/oluwaseun.adeyemi.3" target="_blank" rel="noreferrer">greenhubunilag@gmail.com </a>
                    </span>
                </div>
                <div className='gap-x-7 flex invisible'>
                    <a href=""><i className='fa-brands fa-facebook'></i></a>
                    <a href=""><i className='fa-brands fa-twitter'></i></a>
                    <a href=""><i className='fa-brands fa-instagram'></i></a>
                    <a href=""><i className='fa-brands fa-linkedin'></i></a>
                </div>
            </div>
            <div className='flex py-10 justify-around items-center bg-[#273527] text-white'>
                <div className='w-[35%] md:w-auto'>
                    <Image
                        src={logo}
                        alt="UNILAG LOGO"
                        quality={100}
                        sizes={'100vw'}
                        className="object-cover w-full h-auto "
                    />
                </div>
                <div className='md:flex hidden gap-x-8'>
                    <span>Home</span>
                    <span>About</span>
                    <span>Volunteer</span>
                    <span>Gallery</span>
                    <span>Contact</span>
                </div>
                <div className='md:hidden'>
                    <button><i className='fas fa-bars text-3xl'></i></button>
                </div>
            </div>
        </div>
    )
}

export default Header