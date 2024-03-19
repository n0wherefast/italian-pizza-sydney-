import React from 'react'
import { client } from '@/app/data/sanity'
import{MENU} from '@/app/data/interface'
import '../../../style/menus.scss'
import {Teko} from 'next/font/google'


async function getData() {
  const query =`
  *[_type=='menu_t'] | order(_createdAT desc){
    title,ingredients
  }
  `
  const data = await client.fetch(query)
  return  data
}
const teko = Teko({
  subsets: ["latin"],
  weight: '600'
});
async function TraditionalsMenu() {
const data =  await getData()
  return ( 
    <>
    {/* <WrappedMenus data={data} /> */}
     <main className={` ${teko.className} mainSingleMenu`} >
      <div className='imgContTrad '></div>
     
     <div className='menuList'>
      {data.map((itm:MENU,idx:number) => {
        const {title,ingredients} = itm
        return(
          <div key={idx} className='list'>
              <h1 className='PizzaTitle'>{title}</h1>
              <p className='ingredients'>{ingredients}</p>
          </div>
        )
      })}
    </div> 
    </main> 
    </>
  )
}
export default TraditionalsMenu
