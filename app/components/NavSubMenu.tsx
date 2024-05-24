'use client'
import React, { useEffect, useState } from 'react'
import '../style/navSubMenu.scss'
import Link from 'next/link'
import { Teko } from 'next/font/google';

const teko = Teko({
    subsets: ["latin"],
    weight: '600'
  });

function NavSubMenu() {
  const [isActive,setIsActive] = useState(true)
  useEffect(()=>{
    setIsActive(true)
  },[])

    return (
    <>
        <nav className={` ${teko.className} mainNav`}>
            <Link  className={`link ${isActive===true? 'active':''} `} href={'/pages/menu/traditionals'} >Traditionals</Link>
            <Link onClick={()=>setIsActive(false)} className='link' href={'/pages/menu/premium'}>Premium</Link>
            <Link onClick={()=>setIsActive(false)} className='link' href={'/pages/menu/arancini'} >Aranicini</Link>
        </nav>
    </>
  ) 
}

export default NavSubMenu
