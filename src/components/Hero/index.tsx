import Image from "next/image"
import hero from '../../../public/images/Picture4.png'

const Hero = () => {
    return (
        <section>
            <Image
                src={hero}
                alt="Greenhub"
                quality={100}
                sizes={'100vw'}
                className="object-cover w-full h-auto "
            />
        </section>
    )
}

export default Hero