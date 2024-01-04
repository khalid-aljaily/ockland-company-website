'use client'
import React from "react";
import about1 from "../../assets/about1.png";
import trees from "@/assets/trees.jpg";
import Image from "next/image";
import {motion} from "framer-motion";
import PageMainTxt from "@/components/PageMainTxt";
function page() {
const AnimatedImg = motion(Image)
  return (
    <div className="-mx-6 md:-mx-[100px] ">
      <div className="bg-muted px-8 lg:px-[100px] h-[650px] flex items-end py-[64px] ">
        <PageMainTxt title="About us" text="Learn more about Oakland C.E. and our commitment to excellence,
            innovation, and sustainability."/>
      </div>
      {/* first section */}
      <div className="px-8 lg:px-[100px] mt-[100px] lg:mt-[140px] space-y-[80px]">
        <motion.p initial = {{opacity:0,y:20}} whileInView={{opacity:1,y:0,transition:{duration:.5,delay:.5}}} viewport={{once:true}} className="text-zinc-700 text-[40px] font-normal">
          Innovation.
          <br />
          Guiding our journey from the start.
        </motion.p>
        <div className="flex gap-5 justify-end flex-col-reverse md:flex-row">
          <div className="flex items-end  flex-1">
            <motion.p initial= {{opacity:0,x:-50}} whileInView={{opacity:1,x:0,transition:{duration:.5}}} viewport={{once:true}} className="text-zinc-400 text-sm font-normal leading-tight w-full text-center md:text-right">
              Executive Board members Oakland. 2023
            </motion.p>
          </div>
          <motion.div initial= {{opacity:0,x:50}} whileInView={{opacity:1,x:0,transition:{duration:.5,delay:.5}}} viewport={{once:true}} className="flex-1">
            <Image placeholder="blur" src={about1} alt="about1" className="max-w-full" />
          </motion.div>
        </div>
        <motion.p initial= {{opacity:0,x:-10}} whileInView={{opacity:1,x:0,transition:{duration:.5,delay:.2}}} viewport={{once:true}} className="text-zinc-700 text-lg font-normal leading-[25px] max-w-[787px]">
          Innovation has been at the heart of our journey right from the
          beginning. At Oakland C.E., we believe that staying at the forefront
          of technology and sustainable practices is essential. We&apos;ve
          consistently sought innovative solutions in energy efficiency, LED
          lighting, photovoltaic energy, and electric mobility to shape a
          brighter and greener future.
          <br />
          <br />
          Our commitment to innovation drives us to continually explore new
          avenues, refine our processes, and deliver pioneering results for our
          clients. Join us in embracing innovation as we chart a course towards
          a more sustainable and efficient energy landscape.
        </motion.p>
        {/* second section */}
        <div className="relative h-[528px]">
          <AnimatedImg
            placeholder="blur"
            initial={{opacity:0}}
            whileInView={{opacity:1,transition:{duration:.5}}}
            viewport={{once:true}}
            src={trees}
            alt="trees"
            className="h-full object-cover brightness-[80%] rounded-lg"
          />
          <motion.p initial={{opacity:0}}
            whileInView={{opacity:1,transition:{duration:.5,delay:.5}}}
            viewport={{once:true}} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 text-white text-lg md:text-4xl font-normal">
            Building the future of energye evolution
          </motion.p>
        </div>
        <motion.p initial= {{opacity:0,x:10}} whileInView={{opacity:1,x:0,transition:{duration:.5,delay:.2}}} viewport={{once:true}} className="text-zinc-700 text-lg font-normal leading-[25px] max-w-[787px] ml-auto">
          From our company&apos;s inception, innovation has been ingrained in our
          DNA. It&apos;s not just a buzzword; it&apos;s the driving force behind
          everything we do. Our founders were visionaries who understood that to
          make a real impact in the energy sector, we needed to lead with
          innovation. This commitment to cutting-edge solutions has allowed us
          to consistently push the boundaries of what&apos;s possible in energy
          efficiency, LED lighting, photovoltaic energy, and electric mobility.
          We&apos;ve fostered a culture that encourages creativity, embraces change,
          and thrives on challenges. As we continue to grow, our dedication to
          innovation remains unwavering, ensuring that we remain a trailblazer
          in the industry.
        </motion.p>
      </div>
    </div>
  );
}

export default page;
