import Image from "next/image"
import hero from '../../../public/images/Picture4.png'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

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