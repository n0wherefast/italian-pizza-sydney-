// 'use client'
import React from 'react'
import { client } from '@/app/data/sanity'
import{MENU} from '@/app/data/interface'
import '../../style/menus.scss'

import TraditionalsMenu from './traditionals/page'

export const metadata ={
  title: 'Menu'
}

 function Menu() {

  return ( 
  <>
    {/* <main className='mainMenus'> */}
      <TraditionalsMenu/>
    {/* </main> */}
  </>
  )
}

export default Menu
