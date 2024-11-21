'use client'
import React, { useEffect, useState } from 'react'
import './contact.scss'
import {refForm} from '../../data/data'
import { Teko} from 'next/font/google'
import * as yup from 'yup'
import { validationSchema } from '@/app/validation/validation'
import Swal from 'sweetalert2'

import Image from 'next/image'


// export const metadata ={
//   title: 'Contacts'
// }

const teko = Teko({
  subsets: ["latin"],
  weight: '600'
});

// interface TForm {
//   target: any
//   address:string;
//   date:number;
//   email:string;
//   Numberofadults:number ;
//   Numberofkidsunder10: number ;
//   time:number ;
//   message:string ;
//   pack:string ;
//   phone:number ;
//   name:string ;
//   preventDefault:()=>;
// }
interface IForm{
  id:string;
  type:string;
  name:string;
  min?:string | any;
  max?:string | any;
}

function ContactPage() {

  // const [value,setValue] = useState({})
  
  // const handleChange = (name:string, e:ChangeEvent<HTMLInputElement>)=>{
  //   setValue({...value,[name]:e.target.value})
  //   }
 

// const handleSubmit= (e:FormEvent):void => {
//    e.preventDefault()
//    console.log(value)
//    setValue({})
// }


async function handleSubmit(e:any) {
  e.preventDefault();
  let formData = {
    name: e.target.name.value,
    date: e.target.date.value,
    email: e.target.email.value,
    message: e.target.message.value,
    phone: e.target.phone.value,
    time: e.target.time.value,
    address: e.target.address.value,
    pack: e.target.pack.value,
    numberOfAdults: e.target.numberOfAdults.value,
    numberOfKidsUnder10: e.target.numberOfKidsUnder.value,
  }
  const response = await fetch("https://api.web3forms.com/submit", {
      mode : "cors",
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify({
          access_key: "ccb8043e-4465-42bd-bd6d-a33e654970df",
         ...formData
      }),
  });
  
  const valid = await validationSchema.isValid(formData)
  console.log(valid);
  const result = await response.json();
  if (result.success) {
      e.target.reset()
      Swal.fire({
        title: "Good job!",
        text: "Your message has been sent successfully!",
        icon: "success"
      });
  }else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
    console.log(result.error)
  }

}

  return (
    <>
    <br id='formReq'   />
    <div className={` ${teko.className} ContactPage`}>
      <h1 className='titForm'>  send a message</h1>
    <div className='sectionsContact'>
        <form action="" onSubmit={handleSubmit} >
          {
            refForm.map( (ref:IForm,key)=>{
                          
              return(
                <div className='inputCont' key={key}>
                    <label htmlFor={ref.id}>{ref.id}</label>
                    <input  
                        type={ref.type} 
                        id={ref.id} 
                        placeholder={ref.id} 
                        name={ref.name} 
                        min={ref.min}
                        max={ref.max}
                        required
                      />
                </div>
              )
            })
          }
          
          
          <div className='textCont'>
            <label htmlFor="pack">Request</label>
            <textarea name="message" id="message"   required ></textarea>
          </div>
          <div className='selectCont'>
              <label htmlFor="pack">Select package</label>
                <select className='' name='pack' id='pack'   required>
                  <option value="null">---</option>
                  <option value="packA">pack A</option>
                  <option value="packB">pack B</option>
                  <option value="packC">pack C</option>
                  <option value="packD">pack D</option>
                  <option value="specialPack">special pack</option>
                </select>
          </div>
          <div className="btnCont">
            <input className='btnForm' type="submit"  />
          </div>
        </form>
        
    </div>
     
    {/* <div className=''>
        <p>Call: 0481.769.450</p>
        <p>E-mail: Italianpizzasydney88@gmail.com</p>
    </div> */}

    {/* <div className='mid-sectionsContact'>
     
      <div className='imageContact'/>
    </div>   */}
</div>
</>
  )
}

export default ContactPage
