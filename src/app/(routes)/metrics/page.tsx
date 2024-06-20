import Hero from '@/src/components/Shared/Hero'
import React from 'react'

const page = () => {
    const dataTypes = [
        { icon: "fas fa-lightbulb", text: "Energy Consumption and Efficiency" },
        { icon: "fas fa-leaf", text: "Carbon Footprint" },
        { icon: "fas fa-trash", text: "Waste Management" },
        { icon: "fas fa-tint", text: "Water Usage" },
        { icon: "fas fa-car", text: "Transportation" },
        { icon: "fas fa-building", text: "Sustainable Buildings" },
        { icon: "fas fa-users", text: "Community Engagement and Education" },
        { icon: "fas fa-seedling", text: "Biodiversity and Green Spaces" },
    ];
    return (
        <div>
            <Hero text='Sustainability metrics' />
            <div className="flex mx-auto max-w-screen-2xl flex-col gap-10 py-16 px-5 md:px-8">
                <div className="mx-auto text-center w-fit flex flex-col gap-8">
                    <h2 className='text-3xl'>The UNILAG GREENHUB sustainability metrics</h2>
                    <p>we provide campus data on different efforts aimed at positive impact on climate change.</p>
                </div>
                <div className="flex flex-col gap-10 gap-y-16 flex-wrap md:flex-row justify-center">
                    {
                        dataTypes.map((item) => (
                            <div key={item.text} className="flex-1 md:flex-[45%] lg:flex-[0.3] lg:basis-[30%] flex flex-col gap-5">
                                <div className="text-3xl text-[#2D2418]">
                                    <i className={`${item.icon}`}></i>
                                </div>
                                <h3 className="text-2xl font-bold">{item.text}</h3>
                                <p className="text-sm leading-loose">
                                    The Circular Economic Bazaar provides knowledge and insight into the recycling value-chains and products. It promotes interactions between the university and the circular community for mutual learning.
                                </p>
                                <button className='bg-[#71cd6c] rounded-md text-white px-12 py-2 w-fit'>View</button>
                            </div>
                        ))
                    }
                    <i aria-hidden className='flex-1 md:flex-[45%] lg:flex-[0.3] lg:basis-[30%] '></i>
                    <i aria-hidden className='flex-1 md:flex-[45%] lg:flex-[0.3] lg:basis-[30%] '></i>
                </div>
            </div>
        </div>
    )
}

export default page