'use client'
import React, { useState } from 'react'
import './contact.scss'
import {refForm} from '../../data/data'
import Image from 'next/image'
import { SlSocialInstagram ,SlSocialFacebook} from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

// export const metadata ={
//   title: 'Contacts'
// }

function ContactPage() {
  const [value,setValue] = useState({})


  const handleChange = (name:any, e:any)=>{
    setValue({...value,[name]:e.target.value})
    }
  // const handleOpt = (name:any, e:any)=>{
  //   setValue({...value,[name]:e.target.value})
  // }

const handleSubmit= (e:any) => {
   e.preventDefault()
   console.log(value)
    setValue('')
  
}


  return (
    <div className='ContactPage'>
      <h1> send a message</h1>
    <div className='sectionsContact'>
        <form action="" onSubmit={handleSubmit} >
          {
            refForm.map((ref,key)=>{
              return(
                <div className='inputCont' key={key}>
                    <label htmlFor={ref.name}>{ref.name}</label>
                    <input   type={ref.type} id={ref.id} placeholder={ref.name} name={ref.name}   onChange={(e)=>handleChange(ref.name,e)} />
                </div>
              )
            })
          }
          
          
          <div className='textCont'>
            <label htmlFor="pack">Request</label>
            <textarea name="message" id="message" rows="7" cols="40" onChange={(e)=>handleChange('message',e)}  ></textarea>
          </div>
          <div className='selectCont'>
              <label htmlFor="pack">Select package</label>
                <select className='' name='pack' id='pack'  onChange={(e)=>handleChange('pack',e)}>
                  <option value="packA">pack A</option>
                  <option value="packB">pack B</option>
                  <option value="packC">pack C</option>
                  <option value="specialPack">special pack</option>
                </select>
          </div>
          <div className="btnCont">
            <input className='btnForm' type="submit" />
          </div>
          
        </form>
    </div>
     
    <div className=''>
        <p>Call: 0481.769.450</p>
        <p>E-mail: Italianpizzasydney88@gmail.com</p>
    </div>

    {/* <div className='mid-sectionsContact'>
     
      <div className='imageContact'/>
    </div>   */}
</div>
  )
}

export default ContactPage
