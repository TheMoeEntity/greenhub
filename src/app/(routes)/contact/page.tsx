import Hero from '@/src/components/Shared/Hero'
import React from 'react'

const Contact = () => {
    return (
        <div>
            <Hero text='CONTACT US' />
            <div className="w-full mx-auto max-w-[1450px] flex gap-10 py-10 lg:py-20 px-5 md:px-8 flex-wrap">
                <div className="flex basis-full lg:basis-[30%] flex-col gap-5">
                    <div className="">
                        <h2 className='font-semibold text-2xl'>
                            BEFORE CONTACTING US
                        </h2>
                        <p className='py-5 text-sm text-justify'>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Non equidem invideo, miror magis posuere velit aliquet.</p>
                    </div>
                    <div className=" py-5">
                        <h2 className='font-semibold text-2xl'>
                            CONTACT INFORMATION
                        </h2>
                        <p className='py-5 text-sm'>UNILAG GREENHUB Center, UNILAG, Akoka, Yaba.</p>
                        <div className='text-sm mt-3'>
                            <span className='flex items-center gap-2'>
                                <i className='fa-solid fa-phone'></i> 0807 548 9362
                            </span>
                        </div>
                        <div className='text-sm mt-3'>
                            <span className='flex items-center gap-2'>
                                <i className='fa-solid fa-envelope'></i> contact@greennaturewp.com
                            </span>
                        </div>
                        <div className='text-sm mt-3'>
                            <span className='flex items-center gap-2' >
                                <i className='fas fa-clock'></i> Monday - Fridays 8:00 AM to 6:00 PM
                            </span>
                        </div>
                    </div>
                    <div className="">
                        <h2 className='font-semibold text-2xl'>
                            SOCIAL LINKS
                        </h2>
                        <div className="flex gap-3 text-2xl mt-5">
                            <i className="fa-brands fa-facebook"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 lg:px-5">
                    <form className='w-full flex flex-col gap-7 pb-10'>
                        <div className='flex flex-col gap-8 md:flex-row justify-between'>
                            <div className='md:w-[48%] flex flex-col gap-1'>
                                <label htmlFor="" className='text-xl'>Full name <span className='text-red-700'>*</span></label>
                                <input type="text" className=' py-3 px-2 bg-[#F1F1F1] outline-none' placeholder='Enter your full name' />
                            </div>
                            <div className='md:w-[48%] flex flex-col gap-1'>
                                <label htmlFor="" className='text-xl'>Email <span className='text-red-700'>*</span></label>
                                <input type="text" className=' py-3 px-2 bg-[#F1F1F1] outline-none' placeholder='Enter your email address' />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 justify-between">
                            <div className='md:w-[48%] flex flex-col gap-1'>
                                <label htmlFor="" className='text-xl'>Phone</label>
                                <input type="number" className=' py-3 px-2 bg-[#F1F1F1] outline-none' placeholder='Enter your phone number' />
                            </div>
                            <div className='md:w-[48%] flex flex-col gap-1'>
                                <label htmlFor="" className='text-xl'>Subject <span className='text-red-700'>*</span></label>
                                <select
                                    className=" bg-transparent outline-none"
                                    style={{ width: "80%", padding: '10px 0px', color: 'gray' }}
                                >
                                    <option>--Choose--</option>
                                    <option>Web Development</option>
                                    <option>Mobile Development</option>
                                    <option>Collaboration</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-1'>
                            <label htmlFor="" className='text-xl'>Message <span className='text-red-700'>*</span></label>
                            <textarea
                                className='bg-[#F1F1F1] min-h-40 py-4 px-2 border-none outline-none'
                                placeholder="Your Message"
                                name=""
                                id=""
                                cols={30}

                            ></textarea>
                        </div>
                        <div className='mt-5'>
                            <button className='text-white bg-[#71cd6c] px-12 py-4'>SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact