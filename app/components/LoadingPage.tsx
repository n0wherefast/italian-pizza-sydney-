import React from 'react'
import '../style/loading.scss'
import Image from 'next/image'
import pizza from '../assets/pizzaPixel.webp'

function LoadingPage() {
  return (
    <>
    <div className="mainLoading">
        <Image src={pizza} height={100} width={100} alt='loader'  className='pizza'/>
        <div className='load'>Loading...</div>
    </div>
    </>
  )
}

export default LoadingPage
