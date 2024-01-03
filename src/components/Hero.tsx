'use client'
import React from "react";
import heroImage from "../assets/Rectangle 2.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {motion} from 'framer-motion' 
function Hero() {
const AnimateLink = motion(Link)

  return (
    <div className="flex -mx-6  md:-mx-[100px] lg:h-screen  flex-col lg:flex-row">
      <div className="bg-primary px-6 text-white !h-screen  lg:w-1/2 pb-[40px] md:pb-[64px] flex items-end ">
        <div className="space-y-[40px] md:space-y-[48px] lg:px-[100px] ">
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0,transition:{duration:.5}}} className="text-[64px] ">
          <AnimatedLetters words = 'Redefining Energy'/>
          <p className="sr-only">Redefining Energy</p>
          </motion.h1>
        <motion.p initial={{opacity:0,y:30}} animate={{opacity:1,y:0,transition:{duration:.5,delay:.5}}} className="text-lg">As market leaders for 20 years, we are experts in energy efficiency, providing tailored, concrete solutions to meet your needs.</motion.p>
        <AnimateLink  initial={{opacity:0}} animate ={{opacity:1,transition:{duration:.5,delay:1}}} href={'/portfolio'} className="block">
        <Button variant={'secondary'} className="py-4 rounded-full px-[40px] text-lg" >View our Portfolio</Button>
        </AnimateLink>
          
        </div>
      </div>
      <Image loading="eager" src={heroImage} alt="hero Image" className="  w-full lg:w-1/2  object-cover !m-0" />
      
    </div>
  );
}

export default Hero;

const AnimatedLetters = ({ words }: { words: string }) => {
  return (
    <>
      {words.split('').map((letter, index) => (
        <React.Fragment key={index}>
          {letter === ' ' ? <br/> : null}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        </React.Fragment>
      ))}
    </>
  );
};