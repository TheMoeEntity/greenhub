import React from 'react'
import Image from 'next/image'
import vc from '../../../../public/images/VC-2.png'
import avatar from '../../../../public/images/IMG_6975.jpg'
import avatar2 from '../../../../public/images/IMG_6975.jpg'
import Hero from '@/src/components/Shared/Hero'
import Link from 'next/link'

const Get_Involved = () => {
    return (
        <section>
            <Hero text='BECOME A VOLUNTEER' />
            <div className="py-16 mx-auto flex flex-col gap-10 max-w-[1450px] md:px-5">
                <div className="w-full flex gap-10 md:gap-5 p-5 flex-wrap">
                    <div className="basis-full lg:basis-[47%] flex justify-center items-center">
                        <Image
                            src={vc}
                            alt="Unilag VC"
                            quality={100}
                            sizes={'100vw'}
                            priority
                            className="object-cover w-full h-auto "
                        />
                    </div>
                    <div className='flex lg:px-10 flex-col gap-3 flex-wrap flex-1 basis-full md:basis-[47%]'>
                        <span className='font-semibold text-xl'>VOLUNTEER AT GREENHUB</span>
                        <h1 className="font-semibold text-3xl lg:text-[35px]">A message from the Vice Chancellor</h1>
                        <p className='w-full md:mt-8 text-sm leading-loose italic text-justify'>
                            &#34; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium esse accusamus dicta id vitae possimus atque nobis saepe fugit earum! Impedit, neque. Aliquam, perferendis enim. Modi quas eligendi minus, necessitatibus, laboriosam, magnam qui ipsa atque enim corporis architecto illum quo possimus nisi nihil eveniet reiciendis blanditiis eaque porro culpa voluptatum natus pariatur. Minima, adipisci distinctio.
                            &#34;
                        </p>
                        <span className='text-xl font-semibold mt-5'>- Prof Folasade Ogunsola.</span>
                    </div>
                </div>
                <h1 className="font-semibold my-10 px-5 text-center text-3xl lg:text-[40px]">Meet Our Top Volunteers</h1>
                <div className='px-5 md:px-0'>
                    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center md:gap-5 gap-12">
                        <div className="py-5 border-[1px] md:basis-[45%] lg:basis-[20%] hover:bg-[var(--ditco-tertiary)] duration-500 transition-colors flex flex-col gap-5 border-[#CCCFC9] rounded-xl">
                            <div className='w-full mx-auto px-3'>
                                <Image
                                    src={avatar2}
                                    alt="Asset 1"
                                    quality={100}
                                    sizes={'100vw'}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                            <hr />
                            <div className="flex flex-col text-center gap-3">
                                <b className='font-semibold text-2xl'>Dr Adelopo</b>
                                <span>Leader</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex gap-5 w-full justify-center text-2xl">
                                    <i className="fa-brands fa-facebook"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                        </div>
                        <div className="py-5 hover:bg-[var(--ditco-tertiary)] duration-500 transition-colors border-[1px] md:basis-[45%] lg:basis-[20%]  flex flex-col gap-5 border-[#CCCFC9] rounded-xl">
                            <div className='w-full px-3'>
                                <Image
                                    src={avatar}
                                    alt="Asset 1"
                                    quality={100}
                                    sizes={'100vw'}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                            <hr />
                            <div className="flex flex-col text-center gap-3">
                                <b className='font-semibold text-2xl'>Dr Moses Adebayo</b>
                                <span>Team Lead</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex gap-5 w-full justify-center text-2xl">
                                    <i className="fa-brands fa-facebook"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                        </div>
                        <div className="py-5 border-[1px] hover:bg-[var(--ditco-tertiary)] duration-500 transition-colors md:basis-[45%] lg:basis-[20%]  flex flex-col gap-5 border-[#CCCFC9] rounded-xl">
                            <div className='w-full px-3'>
                                <Image
                                    src={avatar}
                                    alt="Asset 1"
                                    quality={100}
                                    sizes={'100vw'}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                            <hr />
                            <div className="flex flex-col text-center gap-3">
                                <b className='font-semibold text-2xl'>Mr Chukwudi.</b>
                                <span>Lecturer</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex gap-5 w-full justify-center text-2xl">
                                    <i className="fa-brands fa-facebook"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                        </div>
                        <div className="py-5 hover:bg-[var(--ditco-tertiary)] duration-500 transition-colors border-[1px] md:basis-[45%] lg:basis-[20%]  flex flex-col gap-5 border-[#CCCFC9] rounded-xl">
                            <div className='w-full px-3'>
                                <Image
                                    src={avatar2}
                                    alt="Asset 1"
                                    quality={100}
                                    sizes={'100vw'}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                            <hr />
                            <div className="flex flex-col text-center gap-3">
                                <b className='font-semibold text-2xl'>Mr Larry Gaga</b>
                                <span>Environmentalist</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex gap-5 w-full justify-center text-2xl">
                                    <i className="fa-brands fa-facebook"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                        </div>
                        <i className='md:basis-[45%] lg:basis-[20%] flex flex-col gap-5 border-[#CCCFC9] rounded-xl lg:hidden' aria-hidden></i>
                    </div>
                </div>
                <div className=" items-center flex flex-col gap-3">
                    <h1 className="font-semibold my-10 text-center text-3xl lg:text-[40px] leading-tight mx-auto lg:w-[80%]">Ready to become a Volunteer and join Our Commitment to a greener UNILAG?</h1>
                    <a href={'/volunteer'} className='p-5 mt-3 text-white bg-[#71cd6c] w-fit text-xl rounded-md'>BECOME A VOLUNTEER</a>
                </div>
            </div>
        </section>
    )
}

export default Get_Involved