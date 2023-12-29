'use client'
import React,{useState} from 'react'
import { Button } from './ui/button'
import img1 from '@/assets/1.jpg'
import img11 from '@/assets/1.1.jpg'
import img2 from '@/assets/2.jpg'
import img3 from '@/assets/3.jpg'
import img4 from '@/assets/4.jpg'
import img5 from '@/assets/5.jpg'
import img6 from '@/assets/6.jpg'
import Image from 'next/image'

const portCats = [
    'All','LED Lighting','Energy Efficency','Electric Mobility'
]

const projects = [
    {
        title:'Delloite Building, London',
        cats:['Energy Efficency','LED Lighting'],
        imgs:[img1,img11]
    },
    {
        title:'Car Chargers, Oakland',
        cats:['Electric Mobility'],
        imgs:[img2]
    },
    {
        title:'Amazon Headquarters, UK',
        cats:['LED Lighting'],
        imgs:[img3]
    },
    {
        title:'Astrazeneca Lab Facilities, Nevada',
        cats:['LED Lighting'],
        imgs:[img4]
    },
    {
        title:'Gordon’s BBQ, Las Vegas',
        cats:['Energy Efficency','LED Lighting'],
        imgs:[img5]
    },
    {
        title:'Car Chargers, Portugal',
        cats:['Electric Mobility'],
        imgs:[img6]
    }
]

function PortfolioElements() {
    const [active,setActive] = useState('All')
    const filterProjects = active==='All'?projects:projects.filter((item)=>item.cats.includes(active))
  return (
    <div className='bg-muted py-16 px-8 lg:px-[100px] my-[100px]'>
        <div className='flex gap-4 flex-wrap justify-center md:justify-start'>
            {
                portCats.map((item)=>(
                    <Button key={item} variant={'secondary'} className={`${active===item?'bg-primary/50 hover:bg-primary/30 text-white':'bg-white hover:bg-primary/30 hover:text-white'} rounded-full px-6 py-4 font-normal`}
                    onClick={()=>setActive(item)}
                    >{item}</Button>
                ))
            }
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 my-16'>

        {
            filterProjects.map((project)=><div key={project.title}>
                <Image src={project.imgs[0]} alt= {project.title} className='h-[400px] object-cover rounded-xl'/>
                <h3 className='text-neutral-800 text-lg font-normal leading-[25px] mt-4'>{project.title}</h3>
                <p className='opacity-50 text-neutral-800 text-sm font-normal  leading-tight mb-2'>
                    {
                        project.cats.map((cat,idx)=>{
                            return idx!=project.cats.length-1?cat+', ' : cat
                        })
                    }
                </p>
                </div>)
        }
        </div>
    </div>
  )
}

export default PortfolioElements