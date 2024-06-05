'use client'
import styles from "./index.module.css";
import Image from "next/image";
import man from "../../public/images/IMG_6980.jpg";
import { useRouter } from "next/navigation";
import shape from "../../../public/images/shape-1.png";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useReveal } from "@/Helpers/hooks";
const About = () => {
  const { push, visible, ref } = useReveal(useInView)

  return (
    <div className={styles.about}>
      <div className={styles.cards}>
        <div>
          <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
            <i className="fa-solid fa-recycle"></i>
          </div>
          <div>
            <strong>Summer Hangout </strong>
          </div>
          <div>
            <p>
              Providing a helping hand in various areas including education, medical assistance and community support.
            </p>
          </div>
        </div>
        <div>
          <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
            <i className="fa-solid fa-recycle"></i>
          </div>
          <div>
            <strong>Recycle </strong>
          </div>
          <div>
            <p>
              Providing a helping hand in various areas including education, medical assistance and community support.
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
            <i className="fa-solid fa-seedling"></i>
          </div>
          <div>
            <strong>Plant care</strong>
          </div>
          <div>
            <p>
              Extending a helping hand to our local communities through impactful outreach initiatives.
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div>
            <strong>Waste Management</strong>
          </div>
          <div>
            <p>
              Fueling dreams with opportunities through grants and scholarships for aspiring minds.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div
          className={visible ? `${styles.man} ${styles.animClass}` : styles.man}
        >
          <Image
            src={man}
            alt="Vector Image"
            quality={100}
            sizes={'100vw'}
            style={{width:'100%', objectFit:'cover', height:'auto'}}
           
          />
        </div>
        <div
          className={
            visible ? `${styles.stuff} ${styles.animClass2}` : styles.stuff
          }
        >
          <div className={styles.img}>
            <div>
              <Image
                src={shape}
                alt="blob shape"
                style={{ objectFit: 'cover' }}
                fill
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div ref={ref} className={styles.test}></div>
          <h4>&nbsp; &nbsp; &nbsp;VOLUNTEER</h4>
          <h2>Become a Volunteer and join Our Commitment to a greener UNILAG.</h2>
          {/* <p>
            Greenhub Foundation is a non-profit organization based in UNILAG, Akoka. We are dedicated to...
          </p> */}
          <p>At Greenhub Foundation, {`we're `} passionate about waste management and transforming waste to wealth.</p>
          <button style={{ color: 'white' }} onClick={() => push('/')}>KNOW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default About;
