"use client";
import React, { useState } from "react";
import logo from "../assets/Type=Normal.svg";
import dark from '../assets/Type=Dark.svg'
import Image from "next/image";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";



const navItems = ["About us", "Services", "Portfolio", "Contact us"];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  console.log(pathname)
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
          <Button className="bg-white/40 hover:bg-white/30  rounded-full px-[40px] py-4">{item}</Button>
          :
          <Button variant={'link'} className="p-0 text-base font-normal text-white"><Link href={item.toLocaleLowerCase()}>{item}</Link></Button>
          }
          
          </li>
        )):
        navItems.map((item, index) => (
          <li key={index} >
            {item=='Contact us'?
          <Button className="rounded-full px-[40px] py-4"><Link href={item.toLowerCase()}>{item}</Link></Button>
          :
          <Button variant={'link'} className="p-0 text-base font-normal "><Link href={item.toLowerCase()}>{item}</Link></Button>
          }
          
          </li>
        ))
        }
      </ul>
      {isOpen && (
        <ul className="gap-8 flex flex-col lg:hidden absolute right-0 rounded-md top-20 bg-white text-primary px-10 py-5 text-center">
          {navItems.map((item, index) => (
           <li key={index} >
           {item=='Contact us'?
         <Button className="bg-primary/70 hover:bg-primary/80 rounded-full px-[40px] py-4">{item}</Button>
         :
         <Link href={'#'}>{item}</Link>
         }
         
         </li>
          ))}
        </ul>
      )}
    </div>
  );
}
