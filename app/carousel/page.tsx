import { harry } from '@/assets/images'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const imageMap = [harry, harry, harry]
const carousel = () => {
   return (
      <section className='relative flex flex-col justify-center items-center w-full h-[72vh]'>
         <div className='w-[70%] h-[70%] aspect-video overflow-hidden rounded-lg'>
            <Image
               src={harry}
               alt='harry'
               className='h-[100%] w-[100%]'
            />
         </div>
         <div className='flex justify-between w-[85%] absolute'>
            <FaArrowLeftLong className='cursor-pointer' size={20} />
            <FaArrowRightLong className='cursor-pointer' size={20} />
         </div>
         <div className='flex gap-3 mt-3'>
            {imageMap.map((image: StaticImageData, id: number) => (
               <div className='bg-gray-50 p-1 rounded-lg' key={id}></div>
            ))}
         </div>
      </section>
   )
}

export default carousel