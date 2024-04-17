'use client'

import React from 'react'
import Image from 'next/image'
import { Titan_One ,Wix_Madefor_Text,Libre_Franklin,Teko} from 'next/font/google'
import './home.scss'
import IPS from '../../assets/pizzaTruck.webp'
import pizzaPixel from '../../assets/pizzaPixel.webp'
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link'
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateValue } from '../../redux/slice/sizeManager';
import { motion} from 'framer-motion'
import { variantX ,variantY} from '@/app/data/variants';

const titan = Titan_One({
  subsets: ["latin"],
  weight: '400'
});
const racing = Wix_Madefor_Text({
  subsets: ["latin"],
  weight: '800'
});
const libre = Libre_Franklin({
  subsets: ["latin"],
  weight: '800'
});
// interface DELAY {
//   delay:any,
//   delayP:any,
//   delayPP:any
// }

function HomePage() {

  const isEvent = useSelector((state:RootState) =>state.globaleStates.isEvent)
  

  return (
    // <div className='mainHome'>
      <div className='  homeContainer '>
              <Image priority src={pizzaPixel} alt='pizzaPixel' className='pizzaPixel' />

        <div className= {`  homeTit clip-text`} >
          <motion.p variants={variantX} initial='start' whileInView='end'  className='title-Home'> Italian  </motion.p>
          <motion.p variants={variantX} initial='start' whileInView='end'   className='title-Home'>Pizza </motion.p>
          <motion.p variants={variantX} initial='start' whileInView='end'  className='title-Home'>Sydney </motion.p>
        </div>

        


  <motion.div variants={variantY } initial='start' whileInView='end'  className='homeCard'>
          <div className='cardSection'>
            <Image priority src={IPS} alt='image' className='IPSImage' />
            <div className='textCard'>Welcome! i&apos;m here to bring a taste of Italy  directly to your place!</div>
          </div>
          <div className="cardSection">
            <button className='btnHome'>Order Now 🍕</button>
            {
                isEvent == true ?  
                <Link href={'/pages/event'} className="event">
                  New Event
                <MdArrowOutward />
              </Link> : null
            }
          </div>
        </motion.div>

         
      </div>
    // </div>
  )
}

export default HomePage
