'use client'
import React  from 'react'
import{MENU} from '@/app/data/interface'
import '../../style/traditionals.scss'


function WrappedMenus({data}:any) {
  return (
    <>
        <main className='mainTrad'>
      <div className='imgCont'></div>
     
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

export default WrappedMenus
