'use client'
import React, { CSSProperties, useState } from "react";

export default function Testimonials() {

    return (
        <div className="text-gray-600 h-auto py-20 pt-8" id="reviews">

            <div className="max-w-7xl h-auto mx-auto px-6 md:px-12 xl:px-6">

                <div className="my-10 space-y-4 px-6 md:px-0">
                    <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-600  md:text-4xl">Testimonials</h2>
                </div>


                <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">


                    <div
                        className="aspect-auto break-inside-avoid p-8 rounded-3xl text-gray-800 bg-white shadow-xl ">
                        <div className="flex gap-4">
                            <div className='w-12 h-12 flex justify-center items-center rounded-full text-white bg-[#71CD6C]'>
                                <i className="fas fa-user text-xl"></i>
                            </div>
                            {/* <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" /> */}
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 ">Oguntoye Jemima</h6>
                                <p className="text-sm text-gray-500">300L, Cell Biology and Genetics</p>
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            I joined the UNILAG GREEN HUB as a result of my love for the preservation of the quality of nature and {`it's`} resources and it has been mind-blowing ever since.
                            From attending different
                            environmental based conferences
                            and events to my involvement in activities such Plant
                            care that adds value to mother earth. <br /> <br />

                            {`I've`} also been privileged to relate and collaborate with scholarly minds across various departments of the University who have keen interest in the creation of a sustainable environment.


                        </p>
                    </div>


                    <div
                        className="break-inside-avoid text-gray-900 p-8 rounded-3xl bg-white shadow-xl shadow-gray-600/10">
                        <div className="flex gap-4">
                            <div className='w-12 h-12 flex justify-center items-center rounded-full text-white bg-[#71CD6C]'>
                                <i className="fas fa-user text-xl"></i>
                            </div>
                            {/* <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" /> */}
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 ">John Akinseloyin</h6>
                                <p className="text-sm text-gray-500 ">400L, Chemistry.</p>
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            The UNILAG GREEN HUB has been a game-changer for me. After joining UNILG GREENHUB, I can say that I have developed valuable skills in project management, teamwork and leadership. The collaborative spirit and shared passion for making a positive difference among volunteers has truly been inspiring and the experience has empowered me to advocate for sustainable practices
                            and reinforced my commitment to creating a Greener, more sustainable future for our community
                        </p>
                    </div>


                    <div
                        className="aspect-auto p-8 break-inside-avoid rounded-3xl bg-white  shadow-xl">
                        <div className="flex gap-4">
                            <div className='w-12 h-12 flex justify-center items-center rounded-full text-white bg-[#71CD6C]'>
                                <i className="fas fa-user text-xl"></i>
                            </div>
                            {/* <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" /> */}<div>
                                <h6 className="text-lg font-medium ">Nurudeen Ogundipe</h6>
                                <p className="text-sm text-gray-500">300L, Psychology</p>
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            UNILAG is on top of {`it's`} game in the environmental sustainability space and I am proud to be a part of this feat. Cheers to a greener University of Lagos.
                        </p>
                    </div>


                    <div
                        className="aspect-auto break-inside-avoid p-8 border rounded-3xl bg-white shadow-xl h-fit">
                        <div className="flex gap-4">
                            <div className='w-12 h-12 flex justify-center items-center rounded-full text-white bg-[#71CD6C]'>
                                <i className="fas fa-user text-xl"></i>
                            </div>
                            {/* <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" /> */}<div>
                                <h6 className="text-lg font-medium text-gray-700">Sobande Olamide</h6>
                                <p className="text-sm text-gray-500">400L, Marine Sciences</p>
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            Preserving nature has always been something I have been interested in and Greenhub has given me the opportunity to invest more time in it. GREENHUB has helped me to learn more efficient ways to care for my immediate environment and help conserve nature. Cheers to many more years of this. A cleaner, safer, healthier environment for all.
                        </p>
                    </div>


                    <div
                        className="aspect-auto break-inside-avoid p-8 rounded-3xl bg-white shadow-xl shadow-gray-600/10">
                        <div className="flex gap-4">
                            <div className='w-12 h-12 flex justify-center items-center rounded-full text-white bg-[#71CD6C]'>
                                <i className="fas fa-user text-xl"></i>
                            </div>
                            {/* <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" /> */} <div>
                                <h6 className="text-lg font-medium text-gray-700">Aisha Gbadamosi</h6>
                                <p className="text-sm text-gray-500">400L, Chemistry Education</p>
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            Volunteering with UNILAG GREENHUB has been an incredibly rewarding experience that has profoundly impacted my life. The programme not only provided me with a platform to contribute to Environmental sustainability but also enrich my understanding of
                            Ecological issues and importance of Community Engagement. <br /> <br />
                            The mentorship and support from the UNILAG GREENHUB Team and volunteers has guided my personal and professional growth, instilling deep sense of responsibility towards our environment. I am grateful to be part of this transformative initiative and look forward to continue my journey with the UNILG GREENHUB.
                        </p>
                    </div>


                    <div
                        className="aspect-auto break-inside-avoid p-8 rounded-3xl bg-white border-gray-700 shadow-xl shadow-gray-600/10">
                        <div className="flex gap-4">
                            <div className='w-12 h-12 flex justify-center items-center rounded-full text-white bg-[#71CD6C]'>
                                <i className="fas fa-user text-xl"></i>
                            </div>
                            {/* <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" /> */}<div>
                                <h6 className="text-lg font-medium text-gray-700">Fuhad Lawal</h6>
                                <p className="text-sm text-gray-500 ">400L, Microbiology</p>
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            As a microbiology student  fascinated by the unseen world of microbes, I was drawn to Unilag GreenHub to broaden my horizon about the environment.  {`I'm`} grateful I was able to do just that and also be part of the positive change in the environment.
                            This has really showed me the direct connection between environmental efforts and the health of the microbial communities all of which affect our health directly and indirectly.  {`It's`} not just about cleaning our environment, {`it's`} about protecting the invisible world of microbes that sustains us.
                            Together, we can make a real difference for our planet, one microbe at a time.
                        </p>
                    </div>

                    <div
                        className="aspect-auto p-8 break-inside-avoid rounded-3xl bg-white border-gray-700 shadow-xl shadow-gray-600/10">
                        <div className="flex gap-4">
                            <div className='w-12 h-12 flex justify-center items-center rounded-full text-white bg-[#71CD6C]'>
                                <i className="fas fa-user text-xl"></i>
                            </div>
                            {/* <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" /> */}<div>
                                <h6 className="text-lg font-medium text-gray-700">Khadijat Abisola Ibrahim</h6>
                                <p className="text-sm text-gray-500 ">4300L, Arts Education.</p>
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            I am thrilled to be part of UNILAG Green Hub, where I get to contribute to creating a cleaner, healthier environment and combatting plastic pollution. Joining this club has truly opened my eyes to the importance of environmental sustainability, and I am excited to continue learning and making a positive impact alongside like-minded individuals. <br /> <br />
                            UNILAG Green Hub allows me to actively participate in environmental conservation efforts and work towards a greener future.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

