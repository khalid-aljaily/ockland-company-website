"use client";
import React, { useState } from "react";
import logo from "../assets/Type=Normal.svg";
import dark from '../assets/Type=Dark.svg'
import Image from "next/image";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {motion, AnimatePresence} from 'framer-motion'

const navItems = ["About us", "Services", "Portfolio", "Contact us"];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const router = useRouter()
  const AnimatedButton = motion(Button)
  const AnimatedLink = motion(Link)
  return (
    <div className="flex items-center justify-between py-[26px] absolute top-0 z-50 w-[calc(100vw-48px)] md:w-[calc(100%-200px)]">
      <Link href={'/'}>
      <Image src={pathname == '/' ||pathname=='/services'||pathname=='/portfolio'?logo:dark} alt="logo" />
      </Link>
      <div>
        {
          pathname == '/' ||pathname=='/services'||pathname=='/portfolio'?
          <Button
          className="rounded-full p-2 bg-white/40 hover:bg-white/30 block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AlignJustify className="text-white" />
        </Button>
        :
        <Button
        className="rounded-full p-2 block lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AlignJustify className="text-white" />
      </Button>
        }
        
      </div>
      <ul className="gap-8 text-white hidden lg:flex items-center">
        {
        pathname == '/' ||pathname=='/services'||pathname=='/portfolio'?
        navItems.map((item, index:number) => (
          <li key={index} >
            {item=='Contact us'?
          <Button className="bg-white/40 hover:bg-white/30  rounded-full px-[40px] py-4" onClick={()=>{router.push(item.toLocaleLowerCase())}}>{item}</Button>
          :
          <Button variant={'link'} className="p-0 text-base font-normal text-white" onClick={()=>{router.push(item.toLocaleLowerCase())}}>{item}</Button>
          }
          
          </li>
        )):
        navItems.map((item, index) => (
          <li key={index} >
            {item=='Contact us'?
          <Button className="rounded-full px-[40px] py-4" onClick={()=>{router.push(item.toLocaleLowerCase())}}>{item}</Button>
          :
          <Button variant={'link'} className="p-0 text-base font-normal " onClick={()=>{router.push(item.toLocaleLowerCase())}}>{item}</Button>
          }
          
          </li>
        ))
        }
      </ul>
      <AnimatePresence>
      {isOpen && (
        <motion.ul initial={{opacity:0,x:100}} animate ={{opacity:1,x:0}} transition={{duration:.3}} exit={{opacity:0,x:100}} className="gap-8 flex flex-col lg:hidden absolute right-0 rounded-md top-20 bg-white text-primary px-10 py-5 text-center overflow-hidden">
         {navItems.map((item, index) => (
  <li key={index}>
    {item === 'Contact us' ? (
      <AnimatedButton
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: index * 0.4 }}
        className="bg-primary hover:bg-primary/80 rounded-full px-[40px] py-4"
        onClick={() => {
          router.push(item.toLocaleLowerCase());
        }}
      >
        {item}
      </AnimatedButton>
    ) : (
      <AnimatedLink
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.4 }}
        href={item.toLocaleLowerCase()}
        className="block mx-0"
      >
        {item}
      </AnimatedLink>
    )}
  </li>
))}
        </motion.ul>
      )}
      </AnimatePresence>
    </div>
  );
}
