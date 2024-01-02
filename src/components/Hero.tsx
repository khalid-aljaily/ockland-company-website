import React from "react";
import heroImage from "../assets/Rectangle 2.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {

  return (
    <div className="flex -mx-6  md:-mx-[100px] lg:h-screen  flex-col lg:flex-row">
      <div className="bg-primary px-6 text-white !h-screen  lg:w-1/2 pb-[40px] md:pb-[64px] flex items-end ">
        <div className="space-y-[40px] md:space-y-[48px] lg:px-[100px] ">
        <h1 className="text-[64px] ">Redefining Energy</h1>
        <p className="text-lg">As market leaders for 20 years, we are experts in energy efficiency, providing tailored, concrete solutions to meet your needs.</p>
        <Link href={'/portfolio'} className="block">
        <Button variant={'secondary'} className="py-4 rounded-full px-[40px] text-lg" >View our Portfolio</Button>
        </Link>
          
        </div>
      </div>
      <Image src={heroImage} alt="hero Image" className="  w-full lg:w-1/2  object-cover !m-0" />
      
    </div>
  );
}

export default Hero;
