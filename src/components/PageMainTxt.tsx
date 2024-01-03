'use client'
import {motion} from 'framer-motion'
import { usePathname } from 'next/navigation'
function PageMainTxt({title,text}:{title:string,text:string}) {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <div className={``}>
          <motion.h2 initial={{opacity:0,y:30}} animate={{opacity:1,y:0,transition:{duration:.5}}}   className={`${pathName == '/portfolio'||pathName=='/services' ? 'text-white':'text-neutral-800'} text-[64px] font-normal`}>{title}</motion.h2>
          <motion.p  initial={{opacity:0,y:30}} animate={{opacity:1,y:0,transition:{duration:.5,delay:.1}}}  className={`mt-[48px] max-w-[535px] ${pathName == '/portfolio'||pathName=='/services' ? 'text-white':'text-zink-700'}  text-lg font-normal  leading-[25px]`}>
            {text}
          </motion.p>
        </div>
  )
}

export default PageMainTxt