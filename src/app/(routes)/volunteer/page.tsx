import React from 'react'
import Image from 'next/image'
import vc from '../../../../public/images/VC-2.png'
import avatar from '../../../../public/images/IMG_6975.jpg'
import avatar2 from '../../../../public/images/IMG_6975.jpg'
import Hero from '@/src/components/Shared/Hero'
import ig from '../../../../public/images/Greenhub_IG.jpeg'
import volunteer1 from '../../../../public/images/volunteer-1.jpg'
import volunteer2 from '../../../../public/images/volunteer-2.jpg'
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
                            <i className='fas fa-quote-left text-2xl'></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium esse accusamus dicta id vitae possimus atque nobis saepe fugit earum! Impedit, neque. Aliquam, perferendis enim. Modi quas eligendi minus, necessitatibus, laboriosam, magnam qui ipsa atque enim corporis architecto illum quo possimus nisi nihil eveniet reiciendis blanditiis eaque porro culpa voluptatum natus pariatur. Minima, adipisci distinctio.
                            voluptatum natus pariatur. Minima, adipisci distinctio.  voluptatum natus pariatur. Minima, adipisci distinctio.
                            <i className='fas fa-quote-right ml-3 text-2xl'></i>
                        </p>
                        <span className='text-xl font-semibold mt-5'>- Prof Folasade Ogunsola.</span>
                    </div>
                </div>
                <h1 className="font-semibold my-10 px-5 text-center text-3xl lg:text-[40px]">Meet Our Top Volunteers</h1>
                <div className='px-5 md:px-0'>
                    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center md:gap-5 gap-12">
                        <div className="py-5 border-[1px] md:basis-[45%] lg:basis-[20%] hover:bg-[var(--ditco-tertiary)] duration-500 transition-colors flex flex-col gap-5 border-[#CCCFC9] rounded-xl">
                            <div className='w-full mx-auto h-[150px] lg:h-[250px] md:h-[250px] bg-top bg-cover' style={{ backgroundImage: `url('/images/volunteer-2.jpg')` }}>
                            </div>
                            <hr />
                            <div className="flex flex-col text-center gap-3">
                                <b className='font-semibold text-xl'>Ishaq Musab</b>
                                <span>GREENHUB Manager</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex gap-5 w-full justify-center text-2xl">
                                    <i className="fa-brands fa-facebook"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                        </div>
                        <div className="py-5 hover:bg-[var(--ditco-tertiary)] duration-500 transition-colors border-[1px] md:basis-[45%] lg:basis-[20%]  flex flex-col gap-5 border-[#CCCFC9] rounded-xl">
                            <div className='w-full mx-auto h-[150px] lg:h-[250px] md:h-[250px] bg-cover bg-center' style={{ backgroundImage: `url('/images/volunteer-1.jpg')` }}>
                            </div>
                            <hr />
                            <div className="flex flex-col text-center gap-3">
                                <b className='font-semibold text-xl'> Moyosoreoluwa Azeez</b>
                                <span>Volunteer Coordinator</span>
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
                <div className="w-full flex gap-10 lg:flex-row flex-col p-5 md:p-8">
                    <div className='flex lg:px-5 text-justify flex-col gap-3 flex-wrap flex-1 basis-full lg:basis-[47%]'>
                        <h1 className="font-semibold text-3xl lg:text-[35px]">Join us at UNILAG GREEN HUB</h1>
                        <div className='w-11 mt-2 h-[3px] bg-[#71CD6C]'></div>
                        <p className='w-full md:mt-4 leading-loose text-sm'>
                            At UNILAG Green Hub, we&#39;re driven by a passion for environmental stewardship and a commitment to empowering students to become agents of positive change. Through a dynamic blend of experiential learning, impactful advocacy campaigns, proactive policy engagement, and the promotion of sustainable practices, we&#39;re shaping the next generation of environmental leaders.</p>
                        <p className='w-full md:mt-4 leading-loose text-sm'>
                            As an institution-based and student-driven center, UNILAG Green Hub serves as a vibrant nexus for environmental innovation and action within the university community. By fostering a culture of environmental awareness and action, we aim to not only enrich campus life but also contribute to broader efforts for a greener, more sustainable future.
                        </p>
                        <p className='w-full leading-loose text-sm'>
                            Founded in 2022, the Green Hub is an artifice of the University&#39;s commitment to environmental sustainability and education across the campus. Driven by the mission to protect the environment, we engage the young, bright minds of our students and volunteers to think and act sustainably, create value from waste and facilitate the achievement of a circular economy.
                        </p>
                        <p className='w-full leading-loose text-sm'>
                            Join us in our mission to create a healthier planet for current and future generations.
                        </p>
                    </div>
                    <div className="basis-full lg:basis-[45%] lg:p-5 flex justify-center items-center">
                        <div className="w-full">
                            <Image
                                src={ig}
                                alt="Unilag VC"
                                quality={100}
                                sizes={'100vw'}
                                className="object-cover w-full h-auto "
                            />
                        </div>
                    </div>
                </div>
                <div className=" items-center flex flex-col gap-3">
                    <h1 className="font-semibold my-10 text-center text-3xl lg:text-[35px] leading-tight mx-auto lg:w-[70%]">Ready to become a Volunteer and join Our Commitment to a greener UNILAG?</h1>
                    <a href={'/volunteer'} className='p-5 mt-3 text-white bg-[#71cd6c] w-fit text-xl rounded-md'>BECOME A VOLUNTEER</a>
                </div>

            </div>
        </section>
    )
}

export default Get_Involved