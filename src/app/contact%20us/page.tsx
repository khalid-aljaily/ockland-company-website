import React from "react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import locationImg from "@/assets/image 3.png";
import locationIcon from "@/assets/Vector.svg";
import {motion} from 'framer-motion'
import PageMainTxt from "@/components/PageMainTxt";
function page() {
  return (
    <div className="-mx-6 md:-mx-[100px] ">
      <div className="bg-muted px-8 lg:px-[100px] h-[650px] flex items-end py-[64px] ">
        <PageMainTxt title="Contact us" text="Our team is here to assist you on your journey towards a sustainable
            and efficient energy furure."/>
        
      </div>

      <div className="px-8 lg:px-[100px] mt-[100px] lg:mt-[140px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="space-y-16">
            <div>
              <h4 className="text-neutral-800 text-[40px] font-normal mb-5 md:mb-10">
                Location
              </h4>
              <p className="max-w-[513px] text-zinc-700 text-lg font-normal leading-[25px]">
                Avenida Marta Lopes, Nº2
                <br /> 8400-401 Vila Real, Portugal
              </p>
            </div>
            <div>
              <h4 className="text-neutral-800 text-[40px] font-normal  mb-5 md:mb-10">
                Open hours
              </h4>
              <p className="max-w-[513px] text-zinc-700 text-lg font-normal leading-[25px]">
                Weekdays - 9:00am to 6:00pm
                <br /> Weekends - Closed
              </p>
            </div>
          </div>
          <form action="">
            <h3 className="text-neutral-800 text-[40px] font-normal mb-5 md:mb-10">
              Form
            </h3>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                className="border-muted border focus:!border-primary !outline-none px-5 py-[10px] "
                placeholder="Name "
              />
              <input
                type="text"
                className="border-muted border focus:!border-primary !outline-none px-5 py-[10px] "
                placeholder="Email "
              />
              <input
                type="text"
                className="border-muted border focus:!border-primary !outline-none px-5 py-[10px]"
                placeholder="Phone number "
              />
              <input
                type="text"
                className="border-muted border focus:!border-primary !outline-none px-5 py-[10px]"
                placeholder="Company (optional) "
              />
            </div>
            <textarea
              className="border-muted border focus:!border-primary !outline-none px-5 py-[10px] w-full mt-5"
              placeholder="Message "
            />
            <div className="flex items-center my-5">
              <Checkbox
                id="confirmation"
                className="rounded-none border-muted h-6 w-6"
              />
              <label
                htmlFor="confirmation"
                className="ml-2 max-w-[727px] text-zinc-700 text-lg font-normal font-['Inter Tight'] leading-[25px]"
              >
                I consent to Oakland C.E. processing my data for contact
                purposes.
              </label>
            </div>
            <Button type="button" className="px-6 py-4 rounded-full">
              Send
            </Button>
          </form>
        </div>
        <div className="flex gap-5  mt-[100px] flex-col md:flex-row">
          <div className="relative w-full h-[518px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5698.248192584428!2d-7.737418681880195!3d41.299406813266096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAvenida%20Marta%20Lopes%2C%20N%C2%BA2%208400-401%20Vila%20Real%2C%20Portugal!5e1!3m2!1sen!2s!4v1704212138737!5m2!1sen!2s"
              loading="lazy"
              className="w-full rounded-md h-full"
            ></iframe>
            <Image
              src={locationIcon}
              alt="location icon"
              className="absolute h-12 w-12 top-1/2 left-[10%] sm:left-[20%] md:left-[30%] z-10"
            />
          </div>

          <Image
            src={locationImg}
            alt="location"
            className="w-full h-[518px] object-cover flex-1 "
          />
        </div>
      </div>
    </div>
  );
}

export default page;
