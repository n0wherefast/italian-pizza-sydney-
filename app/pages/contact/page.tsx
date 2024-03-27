import React from 'react'
import './contact.scss'
import Image from 'next/image'
import { SlSocialInstagram ,SlSocialFacebook} from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

function Page() {
  return (
    <div className='mainContact'>
    <div className='sectionsContact'>
      <div className='imageContact'/>
      
      
    </div>
    <div className='Contact'>
        <p>Call: 0481.769.450</p>
        <p>E-mail: Italianpizzasydney88@gmail.com</p>
    </div>

    <div className='mid-sectionsContact'>
     
      <div className='imageContact'/>
    </div>  
</div>
  )
}

export default Page
