'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
import { projects } from '@/components/PortfolioElements'
import { useParams } from 'next/navigation'
import Image, { StaticImageData } from 'next/image'
import ContactUs from '@/components/ContactUs'
function Page() {
    const {id} = useParams()
    const project = projects.find(p=>p.id == Number.parseInt(id as string))
  return (
    <div className="-mx-6 md:-mx-[100px] ">
    <div
      className='bg-muted px-8 lg:px-[100px] h-[650px] flex items-end py-[64px] relative'
    >
      
      <div className="z-10">
        <h2 className="text-zinc-400 text-lg font-normal  leading-[25px] tracking-[3.60px]">PORTFOLIO</h2>
        <p className="text-neutral-800 text-[64px] font-normal font-['Inter Tight']">
          {project?.title}
        </p>
      </div>
    </div>
    <div className="px-8 lg:px-[100px] mt-[100px] lg:mt-[140px] ">
      <p className="ml-auto max-w-[1046px] text-zinc-700 text-lg font-normal font-['Inter Tight'] leading-[25px]">{project?.text}</p>
     <Image src={project?.imgs[0] as StaticImageData} alt={project?project.title:''} className='max-w-full object-cover lg:max-w-[1046px] h-[600px]  mt-16'/>
     {
      project?.imgs[1] && <Image src={project.imgs[1]} alt={project.title} className='max-w-full object-cover lg:max-w-[1046px] h-[600px]  mt-10 ml-auto' />
     }
     <div className='mt-16'>

      <ContactUs/>
     </div>
    </div>
    
  </div>
  )
}

export default Page