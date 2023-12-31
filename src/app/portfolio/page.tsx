import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import chart from "@/assets/material-symbols_equalizer.svg";
import people from "@/assets/material-symbols_groups.svg";
import star from "@/assets/mdi_star.svg";
import PortfolioElements from "@/components/PortfolioElements";
import ContactUs from "@/components/ContactUs";

const dist = [
  {
    title: "Innovation",
    icon: chart,
  },
  {
    title: "Expertiese",
    icon: people,
  },
  {
    title: "Quality",
    icon: star,
  },
];

function page() {
  return (
    <div className="-mx-6 md:-mx-[100px] ">
      <div
        className={`bg-[url(../assets/portfolio-main.jpg)] bg-center  px-8 lg:px-[100px] h-[650px] flex items-end py-[64px] relative`}
      >
        <div className="absolute h-full w-full inset-0 bg-black/50" />
        <div className="z-10">
          <h2 className="text-white text-[64px] font-normal">Portfolio</h2>
          <p className="mt-[48px] max-w-[535px] text-white text-lg font-normal  leading-[25px]">
          Explore our portfolio of remarkable projects where innovation and sustainability converge.
          </p>
        </div>
      </div>
      <div className="px-8 lg:px-[100px] mt-[100px] lg:mt-[140px]">
        <h2 className=" text-neutral-800 text-[40px] font-normal">
          The distinction that sets us Apart in the industry
        </h2>
        <p className="max-w-[772px] text-zinc-700 text-lg font-normal leading-[25px] my-16">
          In a highly competitive industry, what distinguishes a company is not
          just its offerings but its unwavering commitment to excellence and
          innovation. At Oakland C.E., we understand that to rise above the
          competition, we must constantly strive for distinction in every aspect
          of our business. Our journey in the energy sector has been defined by
          innovation and expertise.
        </p>
        <div className="flex justify-between max-w-5xl flex-wrap gap-5">
          {dist.map((dist, index) => (
            <div key={index} className="flex gap-5 items-center justify-center md:justify-start">
              <div className="bg-primary p-2 rounded-md">
                <Image src={dist.icon} alt="" />
              </div>
              <h3 className="text-neutral-800 text-[32px] font-normal ">
                {dist.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div>
        <PortfolioElements />
        <div className="px-8 lg:px-[100px] ">
        <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default page;
