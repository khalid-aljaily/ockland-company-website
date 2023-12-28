import React from "react";
import about1 from "../../assets/about1.png";
import trees from "@/assets/trees.jpg";
import Image from "next/image";
function page() {
  return (
    <div className="-mx-6 md:-mx-[100px] ">
      <div className="bg-muted px-8 lg:px-[100px] h-[650px] flex items-end py-[64px] ">
        <div>
          <h2 className="text-neutral-800 text-[64px] font-normal">About us</h2>
          <p className="mt-[48px] max-w-[535px] text-zinc-700 text-lg font-normal  leading-[25px]">
            Learn more about Oakland C.E. and our commitment to excellence,
            innovation, and sustainability.
          </p>
        </div>
      </div>
      {/* first section */}
      <div className="px-8 lg:px-[100px] mt-[100px] lg:mt-[140px] space-y-[80px]">
        <p className="text-zinc-700 text-[40px] font-normal">
          Innovation.
          <br />
          Guiding our journey from the start.
        </p>
        <div className="flex gap-5 justify-end flex-col-reverse md:flex-row">
          <div className="flex items-end  flex-1">
            <p className="text-zinc-400 text-sm font-normal leading-tight w-full text-center md:text-right">
              Executive Board members Oakland. 2023
            </p>
          </div>
          <div className="flex-1">
            <Image src={about1} alt="about1" className="max-w-full" />
          </div>
        </div>
        <p className="text-zinc-700 text-lg font-normal leading-[25px] max-w-[787px]">
          Innovation has been at the heart of our journey right from the
          beginning. At Oakland C.E., we believe that staying at the forefront
          of technology and sustainable practices is essential. We've
          consistently sought innovative solutions in energy efficiency, LED
          lighting, photovoltaic energy, and electric mobility to shape a
          brighter and greener future.
          <br />
          <br />
          Our commitment to innovation drives us to continually explore new
          avenues, refine our processes, and deliver pioneering results for our
          clients. Join us in embracing innovation as we chart a course towards
          a more sustainable and efficient energy landscape.
        </p>
        {/* second section */}
        <div className="relative h-[528px]">
          <Image
            src={trees}
            alt="trees"
            className="h-full object-cover brightness-[80%] rounded-lg"
          />
          <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 text-white text-lg md:text-4xl font-normal">
            Building the future of energye evolution
          </p>
        </div>
        <p className="text-zinc-700 text-lg font-normal leading-[25px] max-w-[787px] ml-auto">
          From our company's inception, innovation has been ingrained in our
          DNA. It's not just a buzzword; it's the driving force behind
          everything we do. Our founders were visionaries who understood that to
          make a real impact in the energy sector, we needed to lead with
          innovation. This commitment to cutting-edge solutions has allowed us
          to consistently push the boundaries of what's possible in energy
          efficiency, LED lighting, photovoltaic energy, and electric mobility.
          We've fostered a culture that encourages creativity, embraces change,
          and thrives on challenges. As we continue to grow, our dedication to
          innovation remains unwavering, ensuring that we remain a trailblazer
          in the industry.
        </p>
      </div>
    </div>
  );
}

export default page;
