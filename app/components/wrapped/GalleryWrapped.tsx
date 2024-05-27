'use client'
import Image from 'next/image'
import React,{useState} from 'react'
import { urlFor } from '@/app/data/sanity'
import {motion} from 'framer-motion'
import { variantX,variantY } from '@/app/data/variants'
import gallerySlice from '../../assets/gallery.webp'

function GalleryWrapped({data}:any) {
    const photosOne = data.slice(0,9)
    const photosTwo = data.slice(10,19)
    const photosThree = data.slice(20,29)
  return (
    <div className='containGal'>
      <div className='containerLogoGallery'>    
         <Image src={gallerySlice} className='galleryHeadImage'  alt='gallery image' width={400} height={200} />
      </div>    

    <div className='gallery'>

    <div className='colGal'>
      {photosOne.map((pic:any , index:number)=>{
        return(
          <motion.div 
            key={pic.id} 
            variants={variantX}
            initial="start" 
            whileInView="end">
                <Image
                priority 
                className='imageGal' 
                key={pic.id}
                src={urlFor(pic.image && pic.image!).url()} 
                width={500}
                height={500}
                alt='photo'
              /> 
         </motion.div> 
        )
         })}
    </div>

    <div className='colGal'  >
      {photosTwo.map((pic:any , index:number)=>{
        return(
          <motion.div 
            key={pic.id} 
            variants={variantY}
            initial="start"
            whileInView="end"
            >
                <Image
                priority 
                className='imageGal' 
                key={pic.id}
                src={urlFor(pic.image && pic.image!).url()} 
                width={500}
                height={500}
                alt='photo'
              /> 
         </motion.div>
            // <Image className='imageGal' key={index} src={pic.download_url} width={pic.width/8}height={pic.height/8} alt='photo'/>
        )
         })}
    </div>
    <div className='colGal'>
      {photosThree.map((pic:any , index:number)=>{
        return(
          <motion.div
           key={pic.id} 
           variants={variantX!}
           initial="start"
           whileInView="end" 
           >
                <Image
                priority 
                className='imageGal' 
                key={pic.id}
                src={urlFor(pic.image && pic.image!).url()} 
                width={500}
                height={500}
                alt='photo'
              /> 
         </motion.div>
            // <Image className='imageGal' key={index} src={pic.download_url} width={pic.width/8}height={pic.height/8} alt='photo'/>
        )
         })}
    </div>

    </div>
    
</div>
  )
}

export default GalleryWrapped
