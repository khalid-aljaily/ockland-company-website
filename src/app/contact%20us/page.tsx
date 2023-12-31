import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="-mx-6 md:-mx-[100px] ">
      <div className="bg-muted px-8 lg:px-[100px] h-[650px] flex items-end py-[64px] ">
        <div>
          <h2 className="text-zinc-700 text-[64px] font-normal">Contact us</h2>
          <p className="mt-[48px] max-w-[535px] text-zinc-700 text-lg font-normal  leading-[25px]">
            Our team is here to assist you on your journey towards a sustainable
            and efficient energy future.
          </p>
        </div>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
