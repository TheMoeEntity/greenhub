import React from 'react'
import Image from 'next/image'
import volunterImage from '../../../../public/images/IMG_6972.jpg'
import vc from '../../../../public/images/VC-2.png'

const Get_Involved = () => {
    return (
        <section>
            <div className="w-full h-[250px] lg:h-[450px] relative">
                <div style={{ backdropFilter: 'blur(5px)' }} className="absolute gap-10 w-full h-full flex-col top-0 left-0 text-white bg-[rgba(0,0,0,0.5)] z-10 flex justify-center items-center text-center font-semibold text-3xl md:text-[40px]">
                    {/* <h3 className='text-[#A2CA62] text-xl text-left'>UNILAG GREENHUB</h3> */}
                    <h1>BECOME A VOLUNTEER AND GET INVOLVED</h1>
                </div>
                <Image
                    src={volunterImage}
                    alt="Banner of volunteer"
                    quality={100}
                    fill
                    sizes={'100vw'}
                    className="object-cover w-full h-auto "
                />
            </div>
            <div className="py-10 mx-auto max-w-[1450px]">
                <div className="w-full flex gap-10 md:gap-5 p-5 md:p-8 flex-wrap">
                    <div className="basis-full md:basis-[47%] flex justify-center items-center">
                        <Image
                            src={vc}
                            alt="Unilag VC"
                            quality={100}
                            sizes={'100vw'}
                            className="object-cover w-full h-auto "
                        />
                    </div>
                    <div className='flex flex-col gap-3 flex-wrap flex-1 basis-full md:basis-[47%]'>
                        <span className='font-semibold text-xl'>VOLUNTEER AT GREENHUB</span>
                        <h1 className="font-semibold text-3xl lg:text-[35px]">A message from the Vice Chancellor</h1>
                        <p className='w-full md:mt-8 italic text-justify'>
                            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium officiis sapiente alias dolorem deleniti, similique quam repellat omnis necessitatibus reprehenderit veritatis, cum velit. Molestiae provident nisi ab veritatis eligendi natus accusantium dolores asperiores consectetur tempora, officiis consequatur libero. Ipsam necessitatibus expedita impedit itaque incidunt tempora commodi rerum illo sequi laudantium recusandae dolores, exercitationem aperiam esse accusamus dicta id vitae possimus atque nobis saepe fugit earum! Impedit, neque. Aliquam, perferendis enim. Modi quas eligendi minus, necessitatibus, laboriosam, magnam qui ipsa atque enim corporis architecto illum quo possimus nisi nihil eveniet reiciendis blanditiis eaque porro culpa voluptatum natus pariatur. Minima, adipisci distinctio.
                            "
                        </p>
                        <span className='text-xl font-semibold mt-5'>- Prof Folasade Ogunsola.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Get_Involved