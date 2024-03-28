import React from 'react'
import './about.scss'
import { SlSocialInstagram ,SlSocialFacebook} from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

export const metadata ={
  title: 'About'
}

function About() {
  return (
    <div className='mainAbout'>
      <h1>WHO I&apos;AM  AND WHAT IS ITALIAN PIZZA SYDNEY</h1>
      <div className='sections'>
        {/* <div className='description'> */}
           
            <div className='text'> My name is Alessandro and I&apos;m from Sicily. I started this job when I was a kid with a lot of passion and sacrificies. Now I&apos;m here to bring a taste of Italy directly to your place
              We offer authentic
              Italian Pizza
              Mobile wood fire oven to your door for wide range of function and events
              We are here to make your day special such as birthday, family gather, teambonding, wedding etc.
              </div>
            {/* <p>
            Mi chiamo Alessandro e vengo dalla Sicilia.
            Ho cominciato questo mestiere da ragazzino con tanta passione e sacrificio.
            Adesso sono qui per offrirvi un assaggio di Italia direttamente nelle vostre case.
        </p> */}
        {/* </div> */}
        <div className='image'></div>
       </div>

       <h1>HOW TO REACH ME</h1>


      <div className='mid-sections'>
        <div className='image'></div>

        <div className="socialCont">
            <div className='Social'>
                <SlSocialFacebook/>
                <SlSocialInstagram/>  
            </div>
            <div className='Social'>
                <FaWhatsapp/>
           </div>
        </div>
      </div>

      <div className='Contact'>
            <p>Call: 0481.769.450</p>
            <p>E-mail: Italianpizzasydney88@gmail.com</p>
      </div>

    
  </div>
  )
}

export default About
