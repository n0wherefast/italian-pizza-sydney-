import React from 'react'
import { client } from '@/app/data/sanity'
import{MENU} from '@/app/data/interface'
import './style/traditionals.scss'

async function getData(query:any) {
  
  const data = await client.fetch(query)
  return  data
}


async  function MenuData({query}:any) {
    const data =  await getData(query)
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

export default MenuData
