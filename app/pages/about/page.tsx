import React from 'react'
import './about.scss'
import WrappedAbout from '@/app/components/wrapped/WrappedAbout';
import ContactPage from '../contact/page';

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
