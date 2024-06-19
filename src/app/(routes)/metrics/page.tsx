import Hero from '@/src/components/Shared/Hero'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero text='Sustainability metrics' />
            <div className="flex mx-auto max-w-screen-2xl flex-col gap-10 py-16 px-5 md:px-8">
                <div className="mx-auto text-center w-fit flex flex-col gap-8">
                    <h2 className='text-3xl'>The UNILAG GREENHUB sustainability metrics</h2>
                    <p>we provide campus data on different efforts aimed at positive impact on climate change.</p>
                </div>
            </div>
        </div>
    )
}

export default page