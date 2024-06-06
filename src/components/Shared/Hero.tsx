import Image from 'next/image'
import volunterImage from '../../../public/images/IMG_6972.jpg'

const Hero = ({ text }: { text: string }) => {
    return (
        <div className="w-full h-[250px] lg:h-[450px] relative">
            <div style={{ backdropFilter: 'blur(5px)' }} className="absolute gap-10 w-full h-full flex-col top-0 left-0 text-white bg-[rgba(0,0,0,0.5)] z-10 flex justify-center items-center text-center font-semibold text-3xl md:text-[40px]">
                {/* <h3 className='text-[#A2CA62] text-xl text-left'>UNILAG GREENHUB</h3> */}
                <h1>{text}</h1>
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
    )
}

export default Hero