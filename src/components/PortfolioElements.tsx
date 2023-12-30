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
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const portCats = [
    'All','LED Lighting','Energy Efficency','Electric Mobility'
]

export const projects = [
    {
        title:'Delloite Building, London',
        id:1,
        cats:['Energy Efficency','LED Lighting'],
        imgs:[img1,img11],
        text: 'The Delloite Building in London underwent a comprehensive energy efficiency upgrade, focusing on implementing LED lighting solutions throughout the entire facility. This modernization initiative resulted in significant energy savings and improved lighting quality, enhancing the overall working environment for employees. The new LED lighting fixtures, with their higher energy efficiency and longer lifespan, not only reduced electricity consumption but also minimized maintenance needs. Additionally, the lighting system was optimized to provide better illumination, ensuring a well-lit workspace that promotes productivity and employee well-being. The project also included the installation of occupancy sensors and smart lighting controls, further enhancing energy efficiency by automatically adjusting lighting levels based on occupancy and daylight availability. The LED lighting retrofit in the Delloite Building serves as a successful example of how sustainable lighting solutions can contribute to energy savings, cost reduction, and a more sustainable future.'
    },
    {
        title:'Car Chargers, Oakland',
        id:2,
        cats:['Electric Mobility'],
        imgs:[img2],
        text: 'As part of the city\'s efforts to promote electric mobility, the installation of car chargers in Oakland has provided convenient charging infrastructure for electric vehicle owners. This initiative aims to reduce carbon emissions and support the transition towards a greener transportation system. The strategically placed car chargers are equipped with various charging levels, accommodating different types of electric vehicles and charging requirements. Electric vehicle owners can now easily access charging stations across the city, making it more convenient to charge their vehicles while on the go. By expanding the charging infrastructure, Oakland is encouraging the adoption of electric vehicles and addressing the range anxiety commonly associated with them. This project not only benefits the environment by reducing greenhouse gas emissions but also contributes to the long-term sustainability and resilience of the city\'s transportation network. By embracing electric mobility, Oakland is taking a significant step towards a cleaner and more sustainable future.'
    },
    {
        title:'Amazon Headquarters, UK',
        cats:['LED Lighting'],
        id:3,
        imgs:[img3],
        text: 'The Amazon Headquarters in the UK implemented a comprehensive LED lighting system, enhancing energy efficiency and reducing electricity consumption. This sustainable lighting solution not only contributes to cost savings but also creates a more comfortable and productive workspace for Amazon employees. The new LED lighting fixtures provide improved illumination quality, effectively reducing eyestrain and creating a more visually appealing environment. Additionally, LED technology has a longer lifespan compared to traditional lighting sources, reducing the frequency of bulb replacements and maintenance requirements. The lighting system is equipped with smart controls, allowing for customized lighting settings based on occupancy and natural daylight availability. This intelligent lighting management further optimizes energy usage and ensures that lighting is only utilized when needed. The LED lighting upgrade aligns with Amazon\'s commitment to sustainability and reducing its environmental footprint. By embracing energy-efficient lighting solutions, Amazon sets an example for other organizations and contributes to a more sustainable future.'
    },
    {
        title:'Astrazeneca Lab Facilities, Nevada',
        cats:['LED Lighting'],
        id:4,
        imgs:[img4],
        text: 'The Astrazeneca Lab Facilities in Nevada underwent a comprehensive lighting upgrade, implementing energy-efficient LED lighting solutions throughout the premises. This retrofitting project aimed to enhance energy efficiency, reduce electricity consumption, and create a better working environment for researchers and scientists. The new LED lighting fixtures provide superior illumination quality, ensuring adequate lighting levels for precise laboratory work while minimizing energy wastage. The longer lifespan of LED bulbs also reduces maintenance costs and ensures consistent lighting performance over time. By adopting LED technology, Astrazeneca demonstrates its commitment to sustainability and environmental responsibility. The lighting upgrade aligns with the company\'s overall goal of reducing its carbon footprint and promoting a greener future. The improved lighting conditions in the lab facilities not only contribute to energy savings but also enhance the safety, productivity, and well-being of the staff, ultimately supporting the advancement of scientific research and development.'
    },
    {
        title:'Gordon’s BBQ, Las Vegas',
        id:5,
        cats:['Energy Efficency','LED Lighting'],
        imgs:[img5],
        text: "Gordon\'s BBQ in Las Vegas embarked on an energy efficiency initiative, with a particular focus on upgrading the lighting system to LED technology. By replacing traditional lighting sources with energy-efficient LED fixtures, the restaurant achieved significant energy savings while improving the overall dining experience. The new LED lighting provides a warm and inviting atmosphere, enhancing the aesthetics and ambiance of the restaurant. LED bulbs also have a longer lifespan, reducing maintenance costs and ensuring consistent lighting performance. Moreover, the energy savings from the lighting upgrade contribute to the restaurant\'s sustainability goals and help reduce its environmental impact. By embracing energy-efficient practices, Gordon\'s BBQ sets an example for the food industry and demonstrates its commitment to providing a delightful dining experience while minimizing itscarbon footprint. The LED lighting retrofit at Gordon's BBQ showcases the potential for energy-efficient solutions to create a win-win scenario, benefiting both the business and the environment."
    },
    {
        title:'Car Chargers, Portugal',
        id:6,
        cats:['Electric Mobility'],
        imgs:[img6],
        text:"In Portugal, the installation of car chargers has been a key initiative to promote electric mobility and support the country's transition to a greener transportation system. The strategic placement of car chargers across different locations makes it convenient for electric vehicle owners to charge their vehicles while on the go. This initiative aims to address the range anxiety associated with electric cars and encourage their adoption by providing accessible charging infrastructure. By expanding the charging network, Portugal is fostering a sustainable transportation ecosystem that reduces carbon emissions and promotes cleaner air quality. The car chargers are equipped with various charging levels, accommodating different types of electric vehicles and charging requirements. This project not only contributes to the country's environmental goals but also enhances the overall convenience and accessibility of electric mobility for residents and visitors alike. Portugal's commitment to electric mobility sets a positive example for other countries and demonstrates its dedication to building a more sustainable and future-forward transportation system."
    }
]

function PortfolioElements() {
    const [active,setActive] = useState('All')
    const filterProjects = active==='All'?projects:projects.filter((item)=>item.cats.includes(active))
    const route = useRouter()
   
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
                <Link href={`/${project.id}`}>
                <h3 className='text-neutral-800 text-lg font-normal leading-[25px] mt-4'>{project.title}</h3>
                </Link>
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