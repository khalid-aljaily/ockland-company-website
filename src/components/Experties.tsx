'use client'
import React from "react";
import ex1 from "../assets/ex1.jpg";
import ex2 from "../assets/ex2.jpg";
import ex3 from "../assets/ex3.jpg";
import ex4 from "../assets/ex4.jpg";
import ex5 from "../assets/image 3.png";
import arrow from "../assets/→.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import {motion} from "framer-motion"
import "../app/globals.css";
const experties = [
  {
    img: ex1,
    title: "Energy Efficiency",
  },
  {
    img: ex2,
    title: "LED Lighting",
  },
  {
    img: ex3,
    title: "Photovoltaic Energy",
  },
  {
    img: ex4,
    title: "Electric Mobility",
  },
];
function Experties() {
  const boxVariant = {
    hidden: {

    },
    visible: {
        transition: {
            staggerChildren: 0.3, 
        },
    },
};

const listVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition:{
          duration:.7
        }
    },
};

  return (
    <>
      <div className="my-[100px] lg:my-[140px]">
        <div>
          <h2 className="text-neutral-800 text-[40px] font-normal mb-[40px]">
            Areas of Experties
          </h2>
          <p className="max-w-[757px] text-zinc-700 text-lg font-normal  leading-[25px] mb-[40px]">
            Whether for small or large-scale projects, we are committed to
            delivering cutting-edge results, contributing to a more sustainable
            and innovative energy future.
          </p>
        </div>
        <div className="overflow-auto">
          <motion.div
           variants={boxVariant}
           whileInView="visible"
           viewport={{ once: true }}
           initial="hidden"
                className="grid grid-cols-4 gap-5 overflow-auto min-w-[1312px] lg:min-w-[unset]">
            {experties.map((item, index) => (
              <motion.div 
              viewport={{ once: true }}
              variants={listVariant}
                key={index}
                className="relative h-[375px] w-[312px] md:w-auto md rounded-xl overflow-hidden shrink-0"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className=" h-full object-cover hover:scale-105 duration-300 "
                />
                <h3 className="absolute bottom-5 left-3 z-20 text-white text-lg font-normal leading-[25px]">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.p initial={{opacity:0,x:30}} viewport={{once:true}} whileInView={{opacity:1,x:0,transition:{duration:.7,delay:.2}}} className="ml-auto mt-[80px] lg:mt-[140px] max-w-[779px] text-zinc-700 text-lg font-normal leading-[25px]">
          Leading the market for two decades, we have been experts in energy
          efficiency. With an unwavering commitment to innovation, we offer
          tailored solutions for projects of all sizes. From LED lighting to
          photovoltaic energy and electric mobility, our dedicated team works
          tirelessly to deliver cutting-edge results. We are committed to
          shaping a more sustainable and efficient energy future.
        </motion.p>
        <div className="flex flex-col items-start lg:flex-row bg-muted justify-between -mx-6 px-8 md:-mx-[100px] lg:px-[100px] mt-8 lg:mt-[131px] gap-[40px] lg:gap-[80px]">
          <Image src={ex5} alt="" className="mt-8 lg:-mt-[71px] lg:mb-[70px] mx-auto" />
          <motion.div initial={{opacity:0}} viewport={{once:true}} whileInView={{opacity:1,transition:{duration:1,delay:.2}}} className="max-w-[787px] lg:mt-[100px] pb-8">
            <h2 className="text-neutral-800 text-[40px] font-normal">
              Deep knowledge in the field
            </h2>
            <p className=" text-zinc-700 text-lg font-normal leading-[25px] my-[40px]">
              Our extensive experience and deep expertise in the energy sector
              have positioned us as leaders in the industry. With two decades of
              market leadership, we have honed our knowledge in energy
              efficiency, LED lighting, photovoltaic energy, and electric
              mobility to a level that sets us apart. Our team&apos;s profound
              understanding of these domains enables us to provide innovative,
              tailored solutions that not only meet but exceed the expectations
              of our clients.
            </p>
            <Button
              variant={"link"}
              className="flex gap-2 items-center button Text text-neutral-800 text-lg font-normal leading-[25px] p-0 "
            >
              Learn more<Image src={arrow} alt="" className="arrow" />
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Experties;
