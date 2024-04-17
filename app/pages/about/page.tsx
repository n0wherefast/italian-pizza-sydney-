import React from 'react'
import './about.scss'
import { SlSocialInstagram ,SlSocialFacebook} from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import alePic from '../../assets/italian pizza sydney20.webp'
import TruckPic from '../../assets/italian pizza sydney27.webp'
import { motion,Variants} from 'framer-motion'
import WrappedAbout from '@/app/components/wrapped/WrappedAbout';

export const metadata ={
  title: 'About'
}

function About() {
  return (
    <>
       <WrappedAbout/>
    </>
    
  )
}

export default About
