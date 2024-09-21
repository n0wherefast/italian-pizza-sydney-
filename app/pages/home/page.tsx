'use client'
import React from 'react'
import Image from 'next/image'
import './home.scss'
import IPS from '../../assets/pizzaTruck.webp'
// import pizzaPixel from '../../assets/pizzaPixel.webp'
import pizzaSlice from '../../assets/pizzaSlice.webp'
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link'
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateValue } from '../../redux/slice/sizeManager';
import { motion} from 'framer-motion'
import { variantX ,variantY} from '@/app/data/variants';
// import useSize from '@/app/hooks/useSize'



function HomePage() {
  const isEvent = useSelector((state:RootState) =>state.globaleStates.isEvent)
  // const [size] = useSize()
  return (
    <>
      <div className='  mainHomeContainer '>
          <div className="midContainer-1">
                  <div  className='circle-cont'>
                    <div className='circle'/>
                  </div>
                  <Image priority src={pizzaSlice} alt='pizzaSlice' className='pizzaSlice bouncex' />
                  <div className='Title-container'>
                    <motion.div variants={variantY!} initial='start' whileInView='end' className='woodfired'>
                      <p>Wood</p>
                      <p>Fired</p>
                    </motion.div>
                    <div className= {`  homeTit `} > 
                            <motion.p variants={variantX!} initial='start' whileInView='end'  className='title-Home'> Italian  </motion.p>
                            <motion.p variants={variantX!} initial='start' whileInView='end'   className='title-Home'>Pizza </motion.p>
                    </div>
                    <motion.div variants={variantY!} initial='start' whileInView='end' className='home-description'>
                      <p>
                        In our truck we make an italian tradional pizza.
                        We specialize in handcraft wood fired pizzas made with fresh ingredients.
                      </p>
                      <Link className='home-btn-menu' href="/pages/menu">Our menu <MdArrowOutward /></Link>
                    </motion.div>
                  </div>
          </div>
          <div className="midContainer-2">
              <motion.div variants={variantY!} initial='start' whileInView='end'  className='homeCard'>
                <div className='cardSection'>
                  <Image priority src={IPS} alt='image' className='IPSImage' />
                  <div className='textCard'>Welcome! i&apos;m here to bring a taste of Italy  directly to your place!</div>
                </div>
                <div className="cardSection">
                  <Link href={'/pages/about#formReq'} className='btnHome'>Enquire Now! 🍕</Link>
                  {
                      isEvent == true ?  
                      <Link href={'/pages/event'} className="event pulse ">
                        <div>New Event</div>
                      <MdArrowOutward />
                    </Link> : null 
                  }
                </div> 
              </motion.div>
          </div>
      </div>
   </>
  )
}

export default HomePage
