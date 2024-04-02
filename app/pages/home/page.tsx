'use client'

import React from 'react'
import Image from 'next/image'
import { Titan_One ,Wix_Madefor_Text,Libre_Franklin,Teko} from 'next/font/google'
import './home.scss'
import IPS from '../../assets/pizzaTruck.png'
import pizzaPixel from '../../assets/pizzaPixel.png'
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link'
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateValue } from '../../redux/slice/sizeManager';

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

function HomePage() {

  const isEvent = useSelector((state:RootState) =>state.globaleStates.isEvent)

  // console.log(isEvent)
  return (
    // <div className='mainHome'>
      <div className='  homeContainer '>

           <Image priority src={pizzaPixel} alt='pizzaPixel' className='pizzaPixel' />

        <div className= {`  homeTit clip-text`} >
          <p className='title-text'> Italian  </p>
          <p className='title-text'>Pizza </p>
          <p className='title-text'>Sydney </p>
        </div>

        


  <div className='homeCard'>
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
          
        </div>

         
      </div>
    // </div>
  )
}

export default HomePage
