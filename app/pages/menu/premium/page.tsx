import React from 'react'
import { client } from '@/app/data/sanity'
import{MENU} from '@/app/data/interface'
import './premium.scss'

async function getData() {
  const query =`
  *[_type=='menu_p'] | order(_createdAT desc){
    title,ingredients
  }
  `
  const data = await client.fetch(query)
  return  data
}

async function Premium() {
const data =  await getData()
 console.log(data)
  return (
    <div className='mainPremium'>
      <div className='imgContPremium'></div>
     
     <div className='menuList'>
      {data.map((itm:MENU,idx:number) => {
        const {title,ingredients} = itm
        return(
          <div key={idx} className='list'>
              <h1>{title}</h1>
              <p>{ingredients}</p>
          </div>
        )
      })}
    </div> 
    </div>
  )
}

export default Premium
