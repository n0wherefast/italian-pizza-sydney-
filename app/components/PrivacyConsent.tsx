'use client'
import React,{useEffect, useState} from 'react'
import '../style/privacyConsent.scss'
import { UseDispatch, useDispatch } from 'react-redux'
import { updateConsent } from '../redux/slice/globaleStates'
import { FaCookieBite } from 'react-icons/fa'

function PrivacyConsent() {
    const [clicked ,setClicked] = useState(false)
    const dispatch = useDispatch()

    const HandleDeniConsent = () =>{
        setClicked(true)
        dispatch(updateConsent(false))
    }
    const HandleAllowConsent = () =>{
        setClicked(true)
        dispatch(updateConsent(true))
    }

    // useEffect(()=>{
    //    HandleAllowConsent()
    //    HandleDeniConsent()
    // },[clicked])
  return (
    <>
    <div className= {` ${ clicked == true?  'hidden':'PrivacyConteiner blur'}  ` }>
        <div className='text'>
        We use cookies for analytics, performance, security, and social media. You consent to our cookies if you continue to use our website
      </div> 
      <div className="btnContainer">
         <button onClick={()=>{HandleAllowConsent()}}  className='AllowBtn'>Allow <FaCookieBite/></button>
         <button onClick={()=>{HandleDeniConsent()}} className='DeniBtn'>Deny</button>
      </div>
   </div>
    </>
    
       
  )
}

export default PrivacyConsent
