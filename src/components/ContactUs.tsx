import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import arrow from '../assets/→.svg'
function ContactUs() {
  return (
    <div className='space-y-[48px] max-w-[779px] mr-auto'>
      <h2 className='text-neutral-800 text-[40px]'>Get in touch with us</h2>
      <p>If you're ready to explore how our expertise in energy efficiency, LED lighting, photovoltaic energy, and electric mobility can benefit your projects, don't hesitate to reach out. We're here to listen, collaborate, and provide you with tailored solutions that align with your specific needs and goals.</p>
      <Button
              variant={"link"}
              className="flex gap-2 items-center button Text text-neutral-800 text-lg font-normal leading-[25px] p-0"
            >
              Contact Us<Image src={arrow} alt="" className="arrow" />
            </Button>
    </div>
  )
}

export default ContactUs