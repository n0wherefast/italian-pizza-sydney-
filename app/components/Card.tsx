import React from 'react'
import '../style/card.scss'
import '../style/ribbon.scss'
import { Teko } from 'next/font/google';
import {CARD} from '../data/interface'

  const teko = Teko({
    subsets: ["latin"],
    weight: '600'
  });

function Card({title, price ,entre, main ,dessert,special}:CARD) {

  return (
    <>
    <div className={` ${teko.className}  ${special==true ? "cardSpecial ribbon":"cardContainer ribbon"}   `}>
   
      <div className="wrap">
 {special == true?
        <span className="ribbon6">Limited</span> :
        <span className="ribbon6 font-small">Pizza all  you can eat</span>
          }
      </div>
    
        <h1 className='titleCard'>{ special == true?'Special Pack' : title}</h1>
        <div className='C-Sec'>
            <p className='textXL'>Entrèe</p><p>{entre}</p>
        </div>
        <div className='C-Sec'>
            <p className=' textXL'>Main</p><p className='text-center'>{main}</p> 
        </div>
        <div className='C-Sec'>
            <p className=' textXL'>Dessert</p><p>{dessert}</p>
        </div>
        <div className='C-price '>{price} </div>
        <div>waiter available for 200$ extra</div>
    </div>
    </>
  )
}

export default Card
