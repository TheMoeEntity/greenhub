'use client'
import React, { CSSProperties, useState } from "react";

export default function Testimonials() {
    const buttonStyles: CSSProperties = {
        background: '#0C4949',
        color: 'white',
        padding: '6px 10px',
        border: 'none',
        borderRadius: '4px',
        marginTop: '5px'
    }
    const [status, setStatus] = useState("")
    const openVideo = (): void => {
        setStatus("Video currently unavailable.")
        setTimeout(() => {
            setStatus('')
        }, 2500);
    }
    return (
        <div className="text-gray-600 py-20 pt-8" id="reviews">

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">

                <div className="mb-10 space-y-4 px-6 md:px-0">
                    <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-600  md:text-4xl">We Have Some Fans</h2>
                </div>


                <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">


                    <div
                        className="aspect-auto p-8 rounded-3xl text-gray-800 bg-white shadow-xl ">
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 ">Daniella Doe</h6>
                                <p className="text-sm text-gray-500">Mobile dev</p>
                            </div>
                        </div>
                        <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
                            illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam
                            ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                            aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                            reprehenderit, veritatis harum et rerum.
                        </p>
                    </div>


                    <div
                        className="aspect-auto text-gray-900 p-8  rounded-3xl bg-white shadow-xl shadow-gray-600/10 ">
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 ">Jane doe</h6>
                                <p className="text-sm text-gray-500 ">Marketing</p>
                            </div>
                        </div>
                        <p className="mt-8"> Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
                            cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
                        </p>
                    </div>


                    <div
                        className="aspect-auto p-8  rounded-3xl bg-white  shadow-xl">
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                            <div>
                                <h6 className="text-lg font-medium ">Yanick Doe</h6>
                                <p className="text-sm text-gray-500">Developer</p>
                            </div>
                        </div>
                        <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                            aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                            reprehenderit, veritatis harum et rerum.
                        </p>
                    </div>


                    <div
                        className="aspect-auto p-8 border rounded-3xl bg-white shadow-xl">
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                            <div>
                                <h6 className="text-lg font-medium text-gray-700">Jane Doe</h6>
                                <p className="text-sm text-gray-500">Mobile dev</p>
                            </div>
                        </div>
                        <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                            aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                            reprehenderit, veritatis harum et rerum.
                        </p>
                    </div>


                    <div
                        className="aspect-auto p-8 rounded-3xl bg-white shadow-xl shadow-gray-600/10">
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                            <div>
                                <h6 className="text-lg font-medium text-gray-700">Andy Doe</h6>
                                <p className="text-sm text-gray-500">Manager</p>
                            </div>
                        </div>
                        <p className="mt-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
                            deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                            reprehenderit, veritatis harum et rerum.
                        </p>
                    </div>


                    <div
                        className="aspect-auto p-8 rounded-3xl bg-white border-gray-700 shadow-xl shadow-gray-600/10">
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
                            <div>
                                <h6 className="text-lg font-medium text-gray-700">Yanndy Doe</h6>
                                <p className="text-sm text-gray-500 ">Mobile dev</p>
                            </div>
                        </div>
                        <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                            aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                            reprehenderit, veritatis harum et rerum.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

