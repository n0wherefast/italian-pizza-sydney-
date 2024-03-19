'use client'
import React from 'react'
import '../style/navSubMenu.scss'
import Link from 'next/link'
import { Teko } from 'next/font/google';

const teko = Teko({
    subsets: ["latin"],
    weight: '600'
  });

function NavSubMenu() {

    return (
    <>
        <nav className={` ${teko.className} mainNav`}>
            <Link className='link' href={'/pages/menu/traditionals'} >Traditionals</Link>
            <Link className='link' href={'/pages/menu/premium'}>Premium</Link>
            <Link className='link' href={'/pages/menu/arancini'} >Aranicini</Link>
        </nav>
    </>
  )
}

export default NavSubMenu
