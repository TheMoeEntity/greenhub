import Hero from '@/src/components/Shared/Hero'
import React from 'react'
import img2 from '../../../../public/images/IMG_6978.jpg'
import hangout from '../../../../public/images/Picture2.png'
import recycle from '../../../../public/images/IMG_6971.jpg'
import advocacy from '../../../../public/images/hangout2.jpeg'
import plantcare from '../../../../public/images/plantcare.jpeg'
import circular from '../../../../public/images/circular.jpeg'
import management from '../../../../public/images/management.jpeg'
import Image from 'next/image'

const Activities = () => {
  return (
    <main>
      <Hero text='OUR ACTIVITIES' />
      <div className="flex mx-auto max-w-screen-2xl flex-col gap-10 py-16 px-5 md:px-8">
        <h2 className="text-3xl font-bold text-center">UNILAG GREENHUB Activities</h2>
        <div className="flex flex-col gap-7 gap-y-12 flex-wrap md:flex-row justify-center">
          <div className="flex-1 md:flex-[45%] lg:flex-[0.3] lg:basis-[30%] flex flex-col gap-5">
            <div className="">
              <Image
                src={circular}
                alt="Unilag VC"
                quality={100}
                sizes={'100vw'}
                className="object-cover w-full h-auto "
              />
            </div>
            <h3 className="text-2xl font-bold">Circular Economy Bazaar</h3>
            <p className="text-sm leading-loose">
              The Circular Economic Bazaar provides knowledge and insight into the recycling value-chains and products. It promotes interactions between the university and the circular community for mutual learning.
            </p>
          </div>
          <div className="flex-1 md:flex-[45%] lg:flex-[0.3] lg:basis-[30%] flex flex-col gap-5">
            <div className="">
              <Image
                src={hangout}
                alt="Unilag VC"
                quality={100}
                sizes={'100vw'}
                className="object-cover w-full h-auto "
              />
            </div>
            <h3 className="text-2xl font-bold">Community Engagement</h3>
            <p className="text-sm leading-loose">
              These are activities to demonstrate the commitment of the Unilag Green Hub to partner and participate with other organization towards circular economy transition and sustainable environment. These may include: Cleanup, Event Participation and Advocacy.
            </p>
          </div>
          <div className="flex-1 md:flex-[45%] lg:flex-[0.3] lg:basis-[30%] flex flex-col gap-5">
            <div className="">
              <Image
                src={advocacy}
                alt="Unilag VC"
                quality={100}
                sizes={'100vw'}
                className="object-cover w-full h-auto "
              />
            </div>
            <h3 className="text-2xl font-bold">Summer Hangout</h3>
            <p className="text-sm leading-loose">
              The hangout is aimed at fostering environmental consciousness and empowering young individuals to take active roles in creating a sustainable future.
            </p>
          </div>
          <div className="flex-1 md:flex-[45%] lg:flex-[0.3] lg:basis-[30%] flex flex-col gap-5">
            <div className="">
              <Image
                src={plantcare}
                alt="Unilag VC"
                quality={100}
                sizes={'100vw'}
                className="object-cover w-full h-auto "
              />
            </div>
            <h3 className="text-2xl font-bold">Plant Care</h3>
            <p className="text-sm leading-loose">
              Plant care is to encourage ecological conversion through planting and monitoring of trees on campus.
              We are monitoring about 1000 trees just planted on campus
            </p>
          </div>
          <div className="flex-1 md:flex-[45%] lg:flex-[0.3] lg:basis-[30%] flex flex-col gap-5">
            <div className="">
              <Image
                src={management}
                alt="Unilag VC"
                quality={100}
                sizes={'100vw'}
                className="object-cover w-full h-auto "
              />
            </div>
            <h3 className="text-2xl font-bold">Waste Management</h3>
            <p className="text-sm leading-loose">
              Committed to a sustainable system of proper waste management, which includes exploring innovative options for creating significant value and positive environmental impact.
            </p>
          </div>
          <div className="flex-1 md:flex-[45%] lg:flex-[0.3] lg:basis-[30%] flex flex-col gap-5">
            <div className="">
              <Image
                src={recycle}
                alt="Unilag VC"
                quality={100}
                sizes={'100vw'}
                className="object-cover w-full h-auto "
              />
            </div>
            <h3 className="text-2xl font-bold">Recycle</h3>
            <p className="text-sm leading-loose">
              We provide a quick-response platform to efficiently facilitate cultural recycling procedures and ensure immediate responses to all recycling-related challenges and needs.
            </p>
          </div>
          <i aria-hidden className='flex-1 md:flex-[45%] lg:flex-[0.3] lg:basis-[30%] '></i>
          <i aria-hidden className='flex-1 md:flex-[45%] lg:flex-[0.3] lg:basis-[30%] '></i>
        </div>
      </div>
    </main>
  )
}

export default Activities