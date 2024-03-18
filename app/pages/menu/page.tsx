// 'use client'
import React from 'react'
import { client } from '@/app/data/sanity'
import{MENU} from '@/app/data/interface'
import './menus.scss'
import NavSubMenu from '../../components/NavSubMenu'
import MenuData from '@/app/components/MenuData'
import TraditionalsMenu from './traditionals/page'



 function Menu() {

  return ( 
  <>
    <main className='main'>
      <TraditionalsMenu/>
    </main>
  </>
  )
}

export default Menu
