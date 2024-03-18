import React from 'react'
import { client } from '@/app/data/sanity'
import{MENU} from '@/app/data/interface'
import './traditionals.scss'

async function getData() {
  const query =`
  *[_type=='menu_t'] | order(_createdAT desc){
    title,ingredients
  }
  `
  const data = await client.fetch(query)
  return  data
}

async function TraditionalsMenu() {
const data =  await getData()
  return ( 
    <>
    <main className='main'>
      <div className='imgCont '></div>
     
     <div className='menuList'>
      {data.map((itm:MENU,idx:number) => {
        const {title,ingredients} = itm
        return(
          <div key={idx} className='list'>
              <h1 >{title}</h1>
              <p>{ingredients}</p>
          </div>
        )
      })}
    </div> 
    </main>
    </>
  )
}
export default TraditionalsMenu
