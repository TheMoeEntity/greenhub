'use client'
import styles from "./index.module.css";
import Image from "next/image";
import man from "../../../../../public/images/IMG_6980.jpg";
import { useRouter } from "next/navigation";
import shape from "../../../../../public/images/shape-1.png";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useReveal } from "@/Helpers/hooks";
import Link from "next/link";
const About = () => {
  const { visible, ref } = useReveal(useInView)

  return (
    <div className={`${styles.about} max-w-7xl mx-auto`}>
      <div className={styles.cards}>
        <div>
          <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
            <i className="fa-solid fa-umbrella-beach"></i>
          </div>
          <div>
            <strong>Summer Hangout </strong>
          </div>
          <div>
            <p className=" font-light">
              Aimed at fostering environmental consciousness and empowering young individuals to take active roles in creating a sustainable future.</p>
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
              We provide a quick-response platform to facilitate cultural recycling procedures and immediate responses to recycling-related challenges.
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
              We encourage ecological conversion through the planting, monitoring, and nurturing of trees across our campus, promoting a sustainable environment.
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
            <i className="fa-solid fa-recycle"></i>
          </div>
          <div>
            <strong>Waste Management</strong>
          </div>
          <div>
            <p>
              Committed to a sustainable system of proper waste management which includes the exploration options for value creation.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div
          className={visible ? `justify-center items-center ${styles.man} ${styles.animClass}` : styles.man}
        >
          <div className="w-full">
            <Image
              src={man}
              alt="Vector Image"
              quality={100}
              sizes={'100vw'}
              style={{ width: '100%', objectFit: 'cover', height: 'auto' }}

            />
          </div>
        </div>
        <div
          className={
            visible ? `${styles.stuff} ${styles.animClass2}` : styles.stuff
          }
        >
          <div ref={ref} className={styles.test}></div>
          <h4>VOLUNTEER</h4>
          <h2>Become a Volunteer and join Our Commitment to a greener UNILAG.</h2>
          <p className="">
            At The UNILAG GREEN HUB, {`we're`} passionate about waste management and transforming waste into wealth, educating young people and vulnerable communities on circular economy, environmental sustainability, climate change, and carbon literacy. By collaborating with eco-conscious organizations at the University of Lagos, we aim to create a cleaner, greener, and more inclusive environment.
          </p>
          <button className="text-white bg-[#71cd6c]">
            <Link href='/volunteer'>KNOW MORE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
