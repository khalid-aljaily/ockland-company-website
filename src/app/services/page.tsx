import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import servicesImg from "@/assets/services.png";
import { Button } from "@/components/ui/button";
import arrow from "@/assets/→.svg";
import Link from "next/link";
import PageMainTxt from "@/components/PageMainTxt";
const services = [
  {
    title: "Illumination",
    description: [
      "Shining a Light on Energy Efficiency",
      "Transforming Spaces with Sustainable Lighting Solutions",
    ],
  },
  {
    title: "Sustainable Energy",
    description: [
      "Harnessing Renewable Power for a Greener Future",
      "Empowering Communities with Clean Energy Solutions",
    ],
  },
  {
    title: "Electro Mobile",
    description: [
      "Driving the Electric Revolution for a Cleaner Tomorrow",
      "Electric Vehicles for a Smarter and Sustainable Commute",
    ],
  },
  {
    title: "Consulting",
    description: [
      "Expert Guidance for Sustainable Energy Strategies",
      "Navigating the Path to a Greener Business Future",
    ],
  },
];

function page() {
  return (
    <div className="-mx-6 md:-mx-[100px] ">
      <div className="bg-primary px-8 lg:px-[100px] h-[650px] flex items-end py-[64px] ">
        <PageMainTxt
          title="Services"
          text=" Discover our comprehensive range of services tailored to meet your
            energy efficiency, LED lighting, photovoltaic energy, and much more."
        />
      </div>
      {/* first section */}
      <div className="px-8 lg:px-[100px] mt-[100px] lg:mt-[140px]">
        <Accordion type="single" collapsible className="w-full">
          {services.map((service, index) => (
            <AccordionItem value={service.title} key={index}>
              <AccordionTrigger className="text-neutral-800 text-3xl md:text-5xl font-normal py-[30px] md:py-[40px]">
                {service.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-inside list-disc">
                  {service.description.map((desc, index) => (
                    <li
                      key={index}
                      className="text-zinc-700 text-lg font-normal leading-[25px]"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex gap-5 justify-end flex-col-reverse md:flex-row my-[104px]">
          <div className="flex items-end  flex-1">
            <p className="text-zinc-400 text-sm font-normal leading-tight w-full text-center md:text-right">
              Sustainable energy consulting Portugal. 2023
            </p>
          </div>
          <div className="flex-1">
            <Image placeholder="blur" src={servicesImg} alt="srvices" className="max-w-full" />
          </div>
        </div>
        <div className="space-y-[48px] max-w-[779px] mr-auto">
          <h2 className="text-neutral-800 text-[40px]">
            Proudly helping businesses
          </h2>
          <p>
            Explore our portfolio of remarkable projects where innovation and
            sustainability converge. Discover how we&apos;ve transformed energy
            landscapes and elevated standards in the industry.
          </p>
          <Button
            variant={"link"}
            className=" text-neutral-800 text-lg font-normal leading-[25px] p-0"
          >
            <Link
              href={"/portfolio"}
              className="flex gap-2 items-center button "
            >
              View our portfolio
              <Image src={arrow} alt="" className="arrow" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
