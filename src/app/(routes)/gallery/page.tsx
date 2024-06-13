'use client'
import Hero from '@/src/components/Shared/Hero'
import React from 'react'
import img from '../../../../public/images/IMG_6979.jpg'
import img3 from '../../../../public/images/IMG_6977.jpg'
import img2 from '../../../../public/images/IMG_6978.jpg'
import Image from 'next/image'

const Gallery = () => {
    const categories = ['Sustainability 1.0', 'Sustainability 1.0', 'Visit from SA', 'Recycling', 'Hangout', 'Unveiling']
    return (
        <div>
            <Hero text='GALLERY' />
            <div className="w-full mx-auto max-w-[1450px] px-5 md:px-8 lg:px-10 flex-col flex gap-12 py-16 ">
                <div className="w-full md:w-[80%] mx-auto flex justify-center flex-wrap items-center gap-5">
                    {
                        categories.map((x, i) => (
                            <button key={i} className='py-3 px-4 shadow-2xl rounded-md text-white bg-[#151C1F] '>{x}</button>
                        ))
                    }
                </div>
                <div className="flex flex-col justify-center md:flex-row w-full flex-wrap gap-5 md:gap-8">
                    <div className="basis-full md:basis-[45%] lg:basis-[30%] lg:flex-1">
                        <Image
                            src={img}
                            alt="Unilag VC"
                            quality={100}
                            sizes={'100vw'}
                            className="object-cover w-full h-auto "
                        />
                    </div>
                    <div className="basis-full md:basis-[45%] lg:basis-[30%] lg:flex-1">
                        <Image
                            src={img2}
                            alt="Unilag VC"
                            quality={100}
                            sizes={'100vw'}
                            className="object-cover w-full h-auto "
                        />
                    </div>
                    <div className="basis-full md:basis-[45%] lg:basis-[30%] lg:flex-1">
                        <Image
                            src={img3}
                            alt="Unilag VC"
                            quality={100}
                            sizes={'100vw'}
                            className="object-cover w-full h-auto "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery