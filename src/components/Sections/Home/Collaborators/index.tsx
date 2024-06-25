import React from 'react'
import sponsor1 from '../../../../../public/images/sponsor.png'
import sponsor2 from '../../../../../public/images/sponsor2.png'
import sponsor3 from '../../../../../public/images/sponsor3.png'
import sponsor4 from '../../../../../public/images/sponsor4.png'
import sponsor5 from '../../../../../public/images/sponsor5.png'
import sponsor6 from '../../../../../public/images/sponsor6.png'
import sponsor7 from '../../../../../public/images/sponosr7.png'
import sponsor8 from '../../../../../public/images/sponosr8.png'
import sponsor9 from '../../../../../public/images/sponsor9.png'
import Image from 'next/image'

const Collaborators = () => {
    return (
        <section className="bg-white py-10">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 className="my-12 lg:mb-16 font-extrabold tracking-tight leading-tight text-center text-4xl">Some of our collaborators</h2>
                {/* <div className="flex flex-col justify-center md:flex-row md:gap-4 lg:gap-5 flex-wrap">
                    <div className='basis-full lg:basis-[20%] md:basis-[30%] flex justify-center'>
                        <Image
                            src={sponsor1}
                            alt="Sponsor picture"
                            quality={100}
                            sizes={'100vw'}
                            className="object-contain w-full  h-auto md:w-[60%]"
                        />
                    </div>
                    <div className='basis-[30%] lg:basis-[20%] md:basis-[30%] flex justify-center'>
                        <Image
                            src={sponsor2}
                            alt="Sponsor picture"
                            quality={100}
                            sizes={'100vw'}
                            className="object-contain w-full  h-auto md:w-[60%]"
                        />
                    </div>
                    <div className='lg:basis-[20%] md:basis-[30%]  flex justify-center'>
                        <Image
                            src={sponsor3}
                            alt="Sponsor picture"
                            quality={100}
                            sizes={'100vw'}
                            className="object-contain w-full  h-auto md:w-[60%]"
                        />
                    </div>
                    <div className='basis-full lg:basis-[20%] md:basis-[30%] flex justify-center'>
                        <Image
                            src={sponsor4}
                            alt="Sponsor picture"
                            quality={100}
                            sizes={'100vw'}
                            className="object-contain w-full  h-auto md:w-[60%]"
                        />
                    </div>

                    <div className='basis-full lg:basis-[20%] md:basis-[30%] flex justify-center'>
                        <Image
                            src={sponsor5}
                            alt="Sponsor picture"
                            quality={100}
                            sizes={'100vw'}
                            className="object-contain w-full  h-auto md:w-[60%]"
                        />
                    </div>
                    <div className='basis-full lg:basis-[20%] md:basis-[30%] flex justify-center'>
                        <Image
                            src={sponsor6}
                            alt="Sponsor picture"
                            quality={100}
                            sizes={'100vw'}
                            className="object-contain w-full  h-auto md:w-[60%]"
                        />
                    </div>
                    <div className='basis-full lg:basis-[20%] md:basis-[30%] flex justify-center'>
                        <Image
                            src={sponsor7}
                            alt="Sponsor picture"
                            quality={100}
                            sizes={'100vw'}
                            className="object-contain w-full  h-auto md:w-[60%]"
                        />
                    </div>
                    <div className='basis-full lg:basis-[20%] md:basis-[30%] flex justify-center'>
                        <Image
                            src={sponsor8}
                            alt="Sponsor picture"
                            quality={100}
                            sizes={'100vw'}
                            className="object-contain w-full  h-auto md:w-[60%]"
                        />
                    </div>
                    <div className='basis-full lg:basis-[20%] md:basis-[30%] flex justify-center'>
                        <Image
                            src={sponsor9}
                            alt="Sponsor picture"
                            quality={100}
                            sizes={'100vw'}
                            className="object-contain w-full  h-auto md:w-[60%]"
                        />
                    </div>
                </div> */}
                <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
                    <div className="relative w-[150px] h-[75px]">
                        <Image
                            src={sponsor1}
                            alt="Asset 1"
                            quality={100}
                            fill
                            sizes={'100vw'}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="relative w-[150px] h-[75px]">
                        <Image
                            src={sponsor2}
                            alt="Asset 1"
                            quality={100}
                            fill
                            sizes={'100vw'}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="relative w-[150px] h-[75px]">
                        <Image
                            src={sponsor3}
                            alt="Asset 1"
                            quality={100}
                            fill
                            sizes={'100vw'}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="relative w-[150px] h-[75px]">
                        <Image
                            src={sponsor4}
                            alt="Asset 1"
                            quality={100}
                            fill
                            sizes={'100vw'}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="relative w-[150px] h-[75px]">
                        <Image
                            src={sponsor5}
                            alt="Asset 1"
                            quality={100}
                            fill
                            sizes={'100vw'}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="relative w-[150px] h-[75px]">
                        <Image
                            src={sponsor6}
                            alt="Asset 1"
                            quality={100}
                            fill
                            sizes={'100vw'}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="relative w-[150px] h-[75px]">
                        <Image
                            src={sponsor7}
                            alt="Asset 1"
                            quality={100}
                            fill
                            sizes={'100vw'}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="relative w-[150px] h-[75px]">
                        <Image
                            src={sponsor8}
                            alt="Asset 1"
                            quality={100}
                            fill
                            sizes={'100vw'}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="relative w-[150px] h-[75px]">
                        <Image
                            src={sponsor9}
                            alt="Asset 1"
                            quality={100}
                            fill
                            sizes={'100vw'}
                            className="object-contain w-full h-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Collaborators