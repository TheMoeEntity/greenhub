'use client'
import { useIntersectionObserver } from '@/Helpers/hooks/useIntersectionObserver';
import CountUp from '@/src/components/Shared/CountUp';
import React, { useCallback, useState } from 'react'

const Numbers = () => {
    const [startCounting, setStartCounting] = useState(false);

    const handleIntersection = useCallback(() => {
        setTimeout(() => {
            setStartCounting(true);
        }, 750);
    }, []);

    const sectionRef = useIntersectionObserver(handleIntersection);
    return (
        <div className='p-8 mt-20 max-w-[1450px] mx-auto w-full'>
            <div className="flex flex-col lg:flex-row justify-center gap-10">
                <div className="flex-1">
                    <h1 className='text-[40px] md:text-[45px] text-left leading-tight font-semibold'>We Have Had Great Impact On Our Environment.</h1>
                    <p className='pt-10'>
                        Since our inception in 2022, we have been able to achieve some remarkable feats.
                    </p>
                    <ul className=' list-disc flex flex-col gap-3 mt-3 ml-3'>
                        <li>Attracted over 27 millions  naira in collaboration funding for recycling and environmental sustainability
                        </li>
                        <li>
                            Established collaboration with  over 10 industries and NGOs
                        </li>
                        <li>
                            Bridging the knowledge gaps in material circularity between the Gown and Town
                        </li>
                        <li>
                            Creation of a data system to tracked, collect and recycled over  750,000 plastic bottles within 2 semesters
                        </li>
                        <li>
                            Prevented over 100 tons of CO<sub>2</sub> emissions within 2 semesters
                        </li>
                        <li>
                            Activated community based incentive of over 700 participants across all stakeholders.
                        </li>
                    </ul>
                </div>
                <div ref={sectionRef} className="flex-1 grow-[1.2] flex-col md:flex-row flex justify-center gap-x-5">
                    <div className="flex flex-1 h-fit flex-col gap-10 justify-between">
                        <div className="w-full">
                            <div className=" bg-[#F8F4F0] shadow rounded-xl px-8 py-12 text-center flex flex-col gap-3">
                                <CountUp showNaira={false} endValue={750000} startCounting={startCounting} />
                                <span>Plastic bottles recycled.</span>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" bg-[#71CD6C] shadow rounded-xl px-8 py-12 text-center flex flex-col gap-3">
                                <CountUp showNaira={false} endValue={10} startCounting={startCounting} />
                                <span>Industries and NGOs collaborated with.</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col mt-12 gap-10 ">
                        <div className="w-full min-w-[268px] lg:max-w-[300px]">
                            <div className=" bg-[#71CD6C] shadow rounded-xl px-8 py-12 text-center flex flex-col gap-3">
                                <CountUp showNaira={false} endValue={100} startCounting={startCounting} />
                                <span>Tons of CO<sub>2</sub> emissions prevented</span>
                            </div>
                        </div>
                        <div className="w-full min-w-[268px] lg:max-w-[300px]">
                            <div className=" bg-[#F8F4F0] shadow rounded-xl px-8 py-12 text-center flex flex-col gap-3">
                                <div className='relative'>
                                    <CountUp showNaira={true} endValue={27000000} startCounting={startCounting} />
                                </div>
                                <span>In collaboration funding</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Numbers