import React, { CSSProperties } from 'react'

const About = () => {
    const sectStyles: CSSProperties = {
        width: '100%',
        backgroundImage: `url('/images/Picture2.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '550px',
        position: 'relative'
    }
    return (
        <section className='w-full '>
            <div className="full z-10 -mt-1 shadow-xl bg-[#3F3221] justify-center flex gap-x-3 gap-y-6 flex-wrap">
                {
                    [...Array(4)].map((_x, i) => (
                        <div key={i} className="max-w-sm flex items-center text-center flex-col gap-y-7 p-6 rounded-lg shadow">
                            <div className="w-12 h-12 text-2xl rounded-full flex flex-col justify-center items-center border-white border">
                                <i className='fas fa-recycle text-white'></i>
                            </div>

                            <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Recycle</h5>
                            </a>
                            <p className="mb-3 font-normal text-white text-xs">Go to this step by step guideline process on.</p>

                        </div>
                    ))
                }
            </div>
            <div style={{ ...sectStyles }}>
                <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center gap-x-4">
                    <div className=' rounded-sm h-[400px]' style={{ backgroundImage: `url('/images/volunteer.jpg')`, height: '350px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay absolute top-0 left-0 h-full"></div>
                    </div>
                    <div className=' rounded-sm h-[400px]' style={{ backgroundImage: `url('/images/volunteer.jpg')`, height: '350px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay absolute top-0 left-0 h-full">dgdgdgdgdgd</div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]"></div>
            </div>
        </section>
    )
}

export default About