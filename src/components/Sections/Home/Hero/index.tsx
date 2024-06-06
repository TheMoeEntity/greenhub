'use client'
import styles from "./index.module.css";
import icon from "../../public/images/greencal_logo.png"
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
    Visibility: "hidden",
  };

  const divStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
  };
  const slideImages = [
    {
      url: "/images/IMG_6972.jpg",
      caption: "Slide 1",
    },
    {
      url: "/images/IMG_6979.jpg",
      caption: "Slide 2",
    },
  ];
  return (
    <div className={styles.hero}>
      <div className="slide-container">
        <Slide
          arrows={false}
          infinite={true}
          duration={7000}
          transitionDuration={400}
        >
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className={styles.sect}
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <div className={styles.overlay}></div>
                <span style={{
                  padding: "20px",
                  background: "#efefef",
                  color: "#000000",
                  visibility: 'hidden'
                }}>{slideImage.caption}</span>
                {index === 1 ? (

                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 0.8,
                          duration: 0.8,
                        },
                      },
                    }}
                    style={{ float: "left" }}
                    className={styles.caption}
                  >
                    <h3>UNILAG Greenhub</h3>
                    <h1>Campus, Culture, Transformation</h1>
                    <p>
                      A Future ready Agenda
                    </p>

                    {/* <Link href={'/'}><button>DONATE NOW</button></Link> */}
                  </motion.div>

                ) : (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0,
                        opacity: 0,
                        x: 0
                      },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 0.9,
                          duration: 1.2,
                          type: 'spring',
                          bounce: 0.45
                        },
                        // transitionEnd: {
                        //   x:"5px",
                        //   delay:0.2,
                        //   duration: 1.4,

                        // }
                      },
                    }}
                    className={styles.caption}>
                    <h3>UNILAG Greenhub</h3>
                    <h1>Campus, Culture, Transformation</h1>
                    <p>
                      A Future ready Agenda
                    </p>


                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Hero;
