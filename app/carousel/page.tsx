'use client'


import { harry, joshua, vlad, wesley } from '@/assets/images'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import styles from '@/app/styles.module.css'



const imageMap = [harry, joshua, vlad, wesley]


const carousel = () => {
   const [imageID, setImageID] = useState(0)
   const [image, setImage] = useState(imageMap[0])

   const handleNext = () => {
      let newImageID = imageID + 1;

      if (newImageID < imageMap.length) {
         setImage(imageMap[newImageID]);
         setImageID(newImageID);
      }
      // No action is taken if newImageID is less than 0

      else {
         newImageID = 0;
         setImage(imageMap[newImageID]);
         setImageID(newImageID);
      }
   };

   const handlePrev = () => {
      let newImageID = imageID - 1;

      if (newImageID >= 0) {
         setImage(imageMap[newImageID]);
         setImageID(newImageID);
      }
      // No action is taken if newImageID is less than 0

      else {
         newImageID = imageMap.length - 1;
         setImage(imageMap[newImageID]);
         setImageID(newImageID);
      }
   };



   return (
      <section className={` ${styles.carouselContainer} relative flex flex-col justify-center items-center w-full h-[120vh]`}>
         <div className={` ${styles.imageContainer} aspect-video overflow-hidden rounded-lg`}>
            <Image
               src={image}
               alt='harry'
               className='h-[100%] w-[100%] '
            />
         </div>
         <div className={` ${styles.arrowContainer} flex justify-between w-[85%] absolute`}>
            <FaArrowLeftLong className='cursor-pointer' size={20} onClick={handlePrev} />
            <FaArrowRightLong className='cursor-pointer' size={20} onClick={handleNext} />
         </div>
         <div className='flex gap-3 mt-3 '>
            {imageMap.map((image: StaticImageData, id: number) => (
               <div className={`p-1 rounded-lg ${imageID == id ? 'bg-black' : 'bg-gray-50'}`} key={id}></div>
            ))}
         </div>
      </section>
   )
}

export default carousel