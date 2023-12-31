"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { projects } from "@/components/PortfolioElements";
import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import ContactUs from "@/components/ContactUs";

function Page() {
  const { id } = useParams();
  const [api, setApi] = React.useState<CarouselApi>();

  const container = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      if (api.selectedScrollSnap() !== 0&&!api.containerNode().classList.contains('-mb-[600px]')) {
        api.containerNode().classList.add('-mb-[600px]') 
      } else if (api.selectedScrollSnap() == 0) {
        api.containerNode().classList.remove('-mb-[600px]') 
      }
    });
  }, [api]);

  return (
    <div className="-mx-6 md:-mx-[100px] ">
      <Carousel opts={{ loop: true, startIndex: +id - 1 }} setApi={setApi}>
        <CarouselContent ref={container} className={`items-start ml-0 `}>
          {projects.map((project, idx) => (
            <CarouselItem key={idx} className="pl-0">
              <div className="bg-muted px-8 lg:px-[100px] h-[650px] flex items-end py-[64px] relative">
                <CarouselPrevious className="absolute left-8 lg:left-[100px] bottom-6 !top-[unset] bg-transparent hover:bg-white border-none z-50 " />
                <CarouselNext className="absolute right-8 lg:right-[100px] bottom-6 !top-[unset] bg-transparent hover:bg-white border-none z-50 " />

                <div className="z-10">
                  <h2 className="text-zinc-400 text-lg font-normal  leading-[25px] tracking-[3.60px] mb-5">
                    PORTFOLIO
                  </h2>
                  <p className="text-neutral-800 text-4xl md:text-[64px] font-normal  mb-[64px]">
                    {project?.title}
                  </p>
                </div>
              </div>
              <div className="px-8 lg:px-[100px] mt-[100px] lg:mt-[140px] ">
                <p className="ml-auto max-w-[1046px] text-zinc-700 text-lg font-normal font-['Inter Tight'] leading-[25px]">
                  {project?.text}
                </p>
                <Image
                  src={project?.imgs[0] as StaticImageData}
                  alt={project ? project.title : ""}
                  className="max-w-full object-cover lg:max-w-[1046px] h-[600px]  mt-16"
                />
                {project?.imgs[1] && (
                  <Image
                    src={project.imgs[1]}
                    alt={project.title}
                    className="max-w-full object-cover lg:max-w-[1046px] h-[600px]  mt-10 ml-auto"
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mx-8 lg:mx-[100px] mt-16">
        <ContactUs />
      </div>
    </div>
  );
}

export default Page;

const carousel = {
  Carousel: (
    <Carousel opts={{ loop: true, startIndex: 2 }}>
      <CarouselContent>
        <CarouselItem>1</CarouselItem>
        <CarouselItem> 2</CarouselItem>
        <CarouselItem>.3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
