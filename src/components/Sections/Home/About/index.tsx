'use client'
import styles from "./index.module.css";
import Image from "next/image";
import man from "../../../../../public/images/IMG_6980.jpg";
import vc from "../../../../../public/images/VC-2.png";
import { useRouter } from "next/navigation";
import shape from "../../../../../public/images/shape-1.png";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useReveal } from "@/Helpers/hooks";
import Link from "next/link";
const About = () => {
  const { visible, ref } = useReveal(useInView)

  return (

    <section className="flex flex-col gap-8">
      <div className={`${styles.about} -mt-20 max-w-7xl mx-auto mb-10`}>
        <div className="flex w-[95%] shadow-xl shadow-cutom-dark rounded-md overflow-hidden justify-center flex-wrap md:w-[90%] mx-auto text-white">
          <div className="basis-full bg-[#2D2418] md:basis-[45%] lg:basis-[25%] gap-8 flex flex-col justify-center p-8">
            <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
              <i className="fa-solid fa-recycle"></i>
            </div>
            <div>
              <strong>Summer Hangout </strong>
            </div>
            <div>
              <p className="font-light text-sm">
                Aimed at fostering environmental consciousness, we empower young individuals to take active roles in creating a sustainable, eco-friendly, and responsible future.
              </p>
            </div>
          </div>
          <div className="basis-full bg-[#3F3221] md:basis-[45%] lg:basis-[25%] gap-8 flex flex-col justify-center p-8">
            <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
              <i className="fa-solid fa-umbrella-beach"></i>
            </div>
            <div>
              <strong>Recycle </strong>
            </div>
            <div>
              <p className="font-light text-sm">
                We provide a quick-response platform to efficiently facilitate cultural recycling procedures and ensure immediate responses to all recycling-related challenges and needs.
              </p>
            </div>
          </div>
          <div className="basis-full bg-[#2D2418] md:basis-[45%] lg:basis-[25%] gap-8 flex flex-col justify-center p-8">
            <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
              <i className="fa-solid fa-seedling"></i>
            </div>
            <div>
              <strong>Plant Care </strong>
            </div>
            <div>
              <p className="font-light text-sm">
                We encourage ecological conversion through the planting, monitoring, and nurturing of trees across our campus, promoting a sustainable environment.
              </p>
            </div>
          </div>
          <div className="basis-full bg-[#3F3221] md:basis-[45%] lg:basis-[25%] gap-8 flex flex-col justify-center p-8">
            <div style={{ width: "60px", height: "60px", fontSize: '40px' }}>
              <i className="fa-solid fa-recycle"></i>
            </div>
            <div className="font-semibold">
              <strong>Waste Management </strong>
            </div>
            <div>
              <p className="font-extralight text-sm">
                Committed to a sustainable system of proper waste management, which includes exploring innovative options for creating significant value and positive environmental impact.
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
            <h2 className="font-medium text-3xl lg:text-[35px]">Become a Volunteer and join Our Commitment to a greener UNILAG.</h2>
            <p className="text-sm leading-[1.7]">
              At The UNILAG GREEN HUB, {`we're`} passionate about waste management and transforming waste into wealth, educating young people and vulnerable communities on circular economy, environmental sustainability, climate change, and carbon literacy. By collaborating with eco-conscious organizations at the University of Lagos, we aim to create a cleaner, greener, and more inclusive environment.
            </p>
            <button className="text-white bg-[#71cd6c]">
              <Link href='/volunteer'>KNOW MORE</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[95%] mx-auto flex gap-10 md:gap-5 px-5 pb-10 flex-wrap">
        <div className='flex lg:px-10 flex-col gap-3 flex-wrap flex-1 basis-full md:basis-[47%]'>
          <h1 className="font-medium text-3xl lg:text-[35px]">A message from the Vice Chancellor</h1>
          <p className='w-full md:mt-8 text-sm leading-[1.7] italic text-justify'>
            <i className='fas fa-quote-left text-2xl'></i>
            {" "}University of Lagos is a leading institution dedicated to quality teaching, learning, research and community service. We have over the past few years developed leaders in many disciplines through our various programmes. As the University of First Choice and the Nation&#39;s Pride, we place great premium on the development and welfare of our staff and students both at the undergraduate and postgraduate levels. Since its establishment in 1962, the institution has continued to play a key role in nation building by molding the teeming youth population through its teaching, research and community services.
            <br /> <br />
            As the melting pot of the society, we strongly believe in diversity and, therefore, provide an atmosphere for an all-inclusive Campus. As a result, we attract quality staff and students who are able to compete at the highest level locally, regionally and globally. This is evident in the over 200,000 highly skilled and knowledgeable graduates we have produced as professionals contributing their quota in their respective endeavours.
            <i className='fas fa-quote-right ml-3 text-2xl'></i>
          </p>
          <span className='text-xl font-semibold mt-5'>- Prof Folasade Ogunsola.</span>
        </div>
        <div className="basis-full lg:basis-[47%] flex justify-center items-center">
          <Image
            src={vc}
            alt="Unilag VC"
            quality={100}
            sizes={'100vw'}
            priority
            className="object-cover w-full h-auto "
          />
        </div>

      </div>
    </section>
  );
};

export default About;
