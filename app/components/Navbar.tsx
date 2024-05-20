'use client'
import React, { useEffect, useState } from 'react'
import {links,LINK }from "../data/data"
import Link from 'next/link'
import { GiFullPizza } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";

import '../style/navbar.scss'
import { BiMenuAltRight, } from "react-icons/bi";
import { Libre_Franklin,Teko} from 'next/font/google'


import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { updateValue } from '../redux/slice/sizeManager';
import { updatePack,updateEvent } from '../redux/slice/globaleStates';

import useSize from '../hooks/useSize';


const libre = Libre_Franklin({
  subsets: ["latin"],
  weight: '800'
});
const teko = Teko({
  subsets: ["latin"],
  weight: '600'
});


function Navbar({data}:any) {
    // const [isClick,setIsClick] = useState(false)
    // const [width,setWidth] = useState(0)
    // const [notify,setNotify] = useState(true)
    // const size = useSelector((state:RootState) =>state.size.value)

    const{dataEvent,dataPack} = data
    const  notify = useSelector((state:RootState) => state.globaleStates.isPack) // global state pack
    const dispatch = useDispatch()
    const [size,isClick,setIsClick] = useSize()

useEffect(()=>{
  dispatch(updatePack(dataPack[0].isPack))
  dispatch(updateEvent(dataEvent[0].isEvent))
})

// console.log(dataEvent[0].isEvent)
// console.log(dataPack[0].isPack)

    const IconNotify = (style:string)=>{
          return(
             <div className={`${teko.className} ${style}`} >{<MdOutlineNotificationsActive/>}</div>
          )      
     }
      
  return (
      <nav className={` ${teko.className}  ${isClick=== true? 'mobileopened transition' :'navbarCont'} `} >
        <div className={`sec`}>
          {/* <Image className='logo' src={logo} width={55} height={55} alt='logo'/> */}
            <div className='title'>Italian Pizza  Sydney</div>
            <div className={`${ isClick&& 'rotate transition'}`} onClick={()=> setIsClick(!isClick)}>
             { isClick===false?  size >805  ? null  :notify&& IconNotify('notifyMenuClosed pulse') : null}
                  {isClick === false ?<BiMenuAltRight  size={35} className='menuMobile transition '/>
                    : <IoMdClose className='menuMobile transition'/> }
            </div> 
        </div>
          <menu className={` ${isClick === true ? 'mobileLink' :'navLink' } `}>
               {
                  links.map((link:LINK)=>{
                      const {id,name,path,news} = link
                      return(
                        <Link key={id} href={path} className='links' onClick={()=> setIsClick(false)}>
                            <li className='transition' 
                          >{name} { notify === true? news&& IconNotify('notify pulse') : null } </li>
                        </Link> 
                      )
                  })
              } 
          </menu>           
    </nav>
  )
}

export default Navbar
