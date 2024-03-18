'use client'
import React from 'react'
import '../style/navSubMenu.scss'
import Link from 'next/link'

function NavSubMenu() {

    return (
    <>
        <nav className='mainNav'>
            <Link className='link' href={'/pages/menu/traditionals'} >Traditionals</Link>
            <Link className='link' href={'/pages/menu/premium'}>Premium</Link>
            <Link className='link' href={'/pages/menu/arancini'} >Aranicini</Link>
        </nav>
    </>
  )
}

export default NavSubMenu
