import React from 'react'
import Image from 'next/image'
import { Titan_One ,Wix_Madefor_Text,Libre_Franklin,Teko} from 'next/font/google'
import './home.scss'
import IPS from '../../assets/pizzaTruck.png'
import pizzaPixel from '../../assets/pizzaPixel.png'

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
  return (
    // <div className='mainHome'>
      <div className='  homeContainer '>
         <Image src={pizzaPixel} alt='pizzaPixel' className='pizzaPixel' />
        <h1 className= {` ${libre.className } homeTitle clip-text`} >
          <span className='title-text'><div className='size'>I </div>talian </span>
          <span className='title-text'><div className='size'>P </div>izza </span>
          <span className='title-text'><div className='size'>S </div>ydney </span>
        </h1>
         <div className='homeCard'>
          <section>
          <Image src={IPS} alt='image' className='IPSImage' />
          <div className='textCard'>Welcome! i&apos;m here to bring a taste of Italy  directly to your place!</div>
          </section>
          <button className='btnHome'>Order Now 🍕</button>
      
        </div>
      </div>
    // </div>
  )
}

export default HomePage
