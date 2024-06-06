'use client'
import './style.css'
import event from '../../../../public/images/sust-2.jpeg'
import event2 from '../../../../public/images/sustainability-1.0.jpeg'
import event3 from '../../../../public/images/img_6971.jpg'
import Image from 'next/image'
import { useClientMediaQuery } from '@/Helpers/hooks/useClientMediaQuery'

const EventsPage = () => {
    const isMD = useClientMediaQuery('(min-width: 1024px)');
    return (
        <section className='mx-auto max-w-7xl text-[#405777] p-5 flex flex-col gap-8'>
            <div className="py-10 xl:w-[75%] mx-auto flex flex-col text-center gap-8 ">
                <h1 className=" text-3xl md:text-[45px] font-semibold leading-normal ">
                    April Winners Get Reward at UNILAG Sustainability Challenge
                </h1>
                <div className='font-light'>
                    May 23, 2024 <span className='pl-3 border-l-[0.5px] border-l-black mx-3'>UNILAG GREENHUB </span>
                </div>
                <div className="w-full">
                    <Image
                        src={event}
                        alt="Banner of event"
                        quality={100}
                        sizes={'100vw'}
                        className="object-cover w-full h-auto "
                    />
                </div>
                <article className='leading-[10%] text-justify flex flex-col gap-5'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum, obcaecati eos nobis, explicabo, alias quia praesentium odit dolorem sint debitis deserunt. Consectetur repudiandae unde facilis aliquam vitae laudantium aut voluptas, ullam sed, minima consequatur ut id. Tempora harum maxime dicta ut suscipit commodi hic voluptatibus, iure ipsum optio voluptatum adipisci, nobis maiores iste minima, numquam provident magni quidem quam veniam alias! Eum, voluptatem amet mollitia vel libero quidem animi dolore delectus? Quo facere ducimus debitis, incidunt quibusdam consequuntur dolore.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat commodi esse voluptate odio impedit eos. Ullam, temporibus exercitationem? Nam et consequuntur error ad dolore obcaecati beatae non adipisci autem earum delectus omnis eum deleniti voluptates doloribus, sint commodi ea quos quibusdam quam. Commodi blanditiis unde ipsum quibusdam ipsam!</p>
                </article>
                <div className='flex flex-wrap justify-between gap-8'>
                    <div className="flex-1 basis-full lg:basis-[30%] relative lg:h-[200px]">
                        {
                            isMD ? (
                                <Image
                                    src={event}
                                    alt="More pictures from the event"
                                    quality={100}
                                    fill={true}
                                    sizes={'100vw'}
                                    priority
                                    className="object-cover w-full h-auto "
                                />
                            ) : (
                                <Image
                                    src={event}
                                    alt="More pictures from the event"
                                    quality={100}
                                    fill={false}
                                    sizes={'100vw'}
                                    priority
                                    className="object-cover w-full h-auto "
                                />
                            )
                        }
                    </div>
                    <div className="flex-1 basis-full lg:basis-[30%] relative lg:h-[200px]">
                        {
                            isMD ? (
                                <Image
                                    src={event2}
                                    alt="More pictures from the event"
                                    quality={100}
                                    fill={true}
                                    sizes={'100vw'}
                                    priority
                                    className="object-cover w-full h-auto "
                                />
                            ) : (
                                <Image
                                    src={event2}
                                    alt="More pictures from the event"
                                    quality={100}
                                    fill={false}
                                    sizes={'100vw'}
                                    priority
                                    className="object-cover w-full h-auto "
                                />
                            )
                        }
                    </div>
                    <div className="flex-1 basis-full lg:basis-[30%] relative lg:h-[200px]">
                        {
                            isMD ? (
                                <Image
                                    src={event3}
                                    alt="More pictures from the event"
                                    quality={100}
                                    fill={true}
                                    sizes={'100vw'}
                                    priority
                                    className="object-cover w-full h-auto "
                                />
                            ) : (
                                <Image
                                    src={event3}
                                    alt="More pictures from the event"
                                    quality={100}
                                    fill={false}
                                    sizes={'100vw'}
                                    priority
                                    className="object-cover w-full h-auto "
                                />
                            )
                        }
                    </div>
                </div>
                <article className='leading-[10%] text-justify flex flex-col gap-5'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum, obcaecati eos nobis, explicabo, alias quia praesentium odit dolorem sint debitis deserunt. Consectetur repudiandae unde facilis aliquam vitae laudantium aut voluptas, ullam sed, minima consequatur ut id. Tempora harum maxime dicta ut suscipit commodi hic voluptatibus, iure ipsum optio voluptatum adipisci, nobis maiores iste minima, numquam provident magni quidem quam veniam alias! Eum, voluptatem amet mollitia vel libero quidem animi dolore delectus? Quo facere ducimus debitis, incidunt quibusdam consequuntur dolore.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat commodi esse voluptate odio impedit eos. Ullam, temporibus exercitationem? Nam et consequuntur error ad dolore obcaecati beatae non adipisci autem earum delectus omnis eum deleniti voluptates doloribus, sint commodi ea quos quibusdam quam. Commodi blanditiis unde ipsum quibusdam ipsam!</p>
                </article>
                <div className='flex flex-wrap justify-between gap-8 pb-20 border-b-[0.5px] border-b-black'>
                    <div className="flex-1 basis-full lg:basis-[30%] relative lg:h-[200px]">
                        {
                            isMD ? (
                                <Image
                                    src={event}
                                    alt="More pictures from the event"
                                    quality={100}
                                    fill={true}
                                    sizes={'100vw'}
                                    priority
                                    className="object-cover w-full h-auto "
                                />
                            ) : (
                                <Image
                                    src={event}
                                    alt="More pictures from the event"
                                    quality={100}
                                    fill={false}
                                    sizes={'100vw'}
                                    priority
                                    className="object-cover w-full h-auto "
                                />
                            )
                        }
                    </div>
                    <div className="flex-1 basis-full lg:basis-[30%] relative lg:h-[200px]">
                        {
                            isMD ? (
                                <Image
                                    src={event2}
                                    alt="More pictures from the event"
                                    quality={100}
                                    fill={true}
                                    sizes={'100vw'}
                                    priority
                                    className="object-cover w-full h-auto "
                                />
                            ) : (
                                <Image
                                    src={event2}
                                    alt="More pictures from the event"
                                    quality={100}
                                    fill={false}
                                    sizes={'100vw'}
                                    priority
                                    className="object-cover w-full h-auto "
                                />
                            )
                        }
                    </div>
                    <div className="flex-1 basis-full lg:basis-[30%] relative lg:h-[200px]">
                        {
                            isMD ? (
                                <Image
                                    src={event3}
                                    alt="More pictures from the event"
                                    quality={100}
                                    fill={true}
                                    sizes={'100vw'}
                                    priority
                                    className="object-cover w-full h-auto "
                                />
                            ) : (
                                <Image
                                    src={event3}
                                    alt="More pictures from the event"
                                    quality={100}
                                    fill={false}
                                    sizes={'100vw'}
                                    priority
                                    className="object-cover w-full h-auto "
                                />
                            )
                        }
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span> Share this post: </span> 
                    <div className="flex gap-3 text-2xl">
                        <i className="fa-brands fa-facebook"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventsPage