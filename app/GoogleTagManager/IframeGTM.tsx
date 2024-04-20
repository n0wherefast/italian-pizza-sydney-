'use client'
import { RootState } from '../redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

function IframeGTM() {
    const consent = useSelector((state:RootState)=> state.globaleStates.isConsent)
     console.log(consent)
  return (
    <>
    {
        consent == true ? <iframe 
        src="https://www.googletagmanager.com/ns.html?id=GTM-5P42Q36H"
        height="0" 
        width="0"
        style={{'display':'none', 'visibility':'hidden'}} >
      </iframe>  : null
    }
     
    </>
  )
}

export default IframeGTM
