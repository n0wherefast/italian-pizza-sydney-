import React from 'react'
import { client } from '@/app/data/sanity'
import{MENU} from '@/app/data/interface'
import '../../../style/menus.scss'
import { Teko } from 'next/font/google'

async function getData() {
  const query =`
  *[_type=='menu_p'] | order(_createdAT desc){
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

async function Premium() {
const data =  await getData()

return (
    <div className={` ${teko.className} mainSingleMenu`} >
      <div className='imgContPremium'></div>
     
     <div className='menuListPrem menuList'>
      {data.map((itm:MENU,idx:number) => {
        const {title,ingredients} = itm
        return(
          <div key={idx} className='list'>
              <h1 className='pizzaTitle'>{title}</h1>
              <p className='ingredients'>{ingredients}</p>
          </div>
        )
      })}
    </div> 
    </div>
  )
}

export default Premium
