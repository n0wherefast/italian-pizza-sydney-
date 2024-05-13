'use client'
import React from 'react'
import { SlSocialInstagram ,SlSocialFacebook} from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import alePic from '../../assets/italian pizza sydney20.webp'
import TruckPic from '../../assets/italian pizza sydney27.webp'
import { motion} from 'framer-motion'
import { variantX ,variantY} from '@/app/data/variants';
import Link from 'next/link';

function WrappedAbout() {
    
  return (
    <>
        <div className='mainAbout'>
        <h1>WHO I&apos;AM  AND WHAT IS ITALIAN PIZZA SYDNEY</h1>
        <div className='sections'>
            
                <motion.div 
                  variants={variantY}
                  initial='start'
                  whileInView='end'
                 
                  className='text'> 
                    My name is Alessandro and I&apos;m from Sicily. I started this job when I was a kid with a lot of passion and sacrificies. Now I&apos;m here to bring a taste of Italy directly to your place
                    We offer authentic
                    Italian Pizza
                    Mobile wood fire oven to your door for wide range of function and events
                    We are here to make your day special such as birthday, family gather, teambonding, wedding etc.
                </motion.div>
                
            <motion.div  variants={variantX} initial="start" whileInView="end">
               <Image src={alePic} alt='' className='imageAbout'/>
            </motion.div>
        </div>

        <motion.h1 
            variants={variantY}
            initial='start'
            whileInView='end'>HOW TO REACH ME
        </motion.h1>


        <div className='mid-sections'>
        <motion.div  variants={variantX} initial="start" whileInView="end">
          <Image src={TruckPic} alt='' className='imageAbout'/>
        </motion.div> 

            <div className="socialCont">
                <div className='Social'>
                    <Link className='FB' href={'https://www.facebook.com/profile.php?id=100088427027910'}>
                    <SlSocialFacebook/>
                    </Link>
                    <Link className='IG' href={'https://www.instagram.com/italianpizzasyd?igsh=NmxsOGVmeWQ2dXVv'}>
                    <SlSocialInstagram/> 
                    </Link> 
                </div>
                <div className='Social'>
                    <Link className='WA' href={'https://wa.me/qr/WEOOT3HPLJOVG1 '}>
                      <FaWhatsapp/>
                    </Link>
            </div>
            </div>
        </div>

        <div className='Contact'>
                <p>Call: 0481.769.450</p>
                <p>E-mail: Italianpizzasydney88@gmail.com</p>
        </div>
    </div>
  </>
  )
}

export default WrappedAbout
