import Hero from '@/src/components/Shared/Hero'
import Image from 'next/image'
import React from 'react'
import greenhub from '../../../../public/images/IMG_6972.jpg'
import Numbers from '@/src/components/Sections/Home/About/Numbers'
import unigreenhub from '../../../../public/images/UNILAG-GREEN-HUB-8-1.png'
import recycled from '../../../../public/images/RECYCLED-MATERIALS.png'
import interior from '../../../../public/images/IMG_9680-2048x1365.jpeg'
import Link from 'next/link'

const About_Us = () => {
    return (
        <main>
            <Hero text='About Us' />
            <div className="py-10 mx-auto max-w-[1450px]">
                <div className="w-full flex gap-10 lg:flex-row flex-col p-5 md:p-8">
                    <div className='flex lg:px-10 flex-col gap-3 flex-wrap flex-1 basis-full md:basis-[47%]'>
                        <h1 className="font-semibold text-3xl lg:text-[35px]">About UNILAG GREEN HUB</h1>
                        <div className='w-11 mt-2 h-[3px] bg-[#71CD6C]'></div>
                        <p className='w-full md:mt-4 leading-loose text-sm'>
                            The UNILAG GREEN HUB is your go-to learning center for everything you need to know about circular economy, environmental sustainability, waste management, climate change and carbon literacy. We empower young people and vulnerable communities to turn waste to wealth and to advocate for better ESG policies. We work hand-in-hand with eco-conscious organizations in the University of Lagos towards achieving a cleaner, greener, inclusive and sustainable environment for all.
                        </p>
                        <p className='w-full leading-loose text-sm'>
                            Founded in 2022, the Green Hub is an artifice of the University&#39;s commitment to environmental sustainability and education across the campus. Driven by the mission to protect the environment, we engage the young, bright minds of our students and volunteers to think and act sustainably, create value from waste and facilitate the achievement of a circular economy.
                        </p>
                        <p className='w-full leading-loose text-sm'>
                            The Green Hub is committed to environmental literacy and stewardship, as every avenue to educate others is taken and all individual and collective efforts towards sustainability are duly rewarded.
                        </p>
                        <Link href={'/volunteer'} className='p-3 mt-3 text-white bg-[#71cd6c] w-fit'>VOLUNTEER</Link>
                    </div>
                    <div className="basis-full md:basis-[45%] flex justify-center items-center">
                        <Image
                            src={greenhub}
                            alt="Unilag VC"
                            quality={100}
                            sizes={'100vw'}
                            className="object-cover w-full h-auto "
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 justify-center p-5 md:p-8">
                    <div className="basis-full xl:basis-[30%] flex flex-col gap-4">
                        <div>
                            <Image
                                src={unigreenhub}
                                alt="Unilag VC"
                                quality={100}
                                sizes={'100vw'}
                                className="object-cover w-full h-auto "
                            />
                        </div>
                        <span className='font-extrabold text-xl'>Think Green</span>
                    </div>
                    <div className="basis-full xl:basis-[30%] flex flex-col gap-4">
                        <div>
                            <Image
                                src={recycled}
                                alt="Unilag VC"
                                quality={100}
                                sizes={'100vw'}
                                className="object-cover w-full h-auto "
                            />
                        </div>
                        <span className='font-extrabold text-xl'>Made from recycled materials</span>
                    </div>
                    <div className="basis-full xl:basis-[30%] flex flex-col gap-4">
                        <div>
                            <Image
                                src={interior}
                                alt="Unilag VC"
                                quality={100}
                                sizes={'100vw'}
                                className="object-cover w-full h-auto "
                            />
                        </div>
                        <span className='font-extrabold text-xl'>UNILAG GREEN HUB</span>
                    </div>
                </div>
                <div className='lg:px-10'>
                    <Numbers />
                </div>
            </div>
        </main>
    )
}

export default About_Us