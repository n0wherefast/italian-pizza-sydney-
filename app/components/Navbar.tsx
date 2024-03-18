'use client'
import React, { useEffect, useState } from 'react'
import {links,LINK }from "../data/data"
import Link from 'next/link'
import { GiFullPizza } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import '../style/navbar.scss'
import { BiMenuAltRight, } from "react-icons/bi";
import { Libre_Franklin,Teko} from 'next/font/google'


import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { updateValue } from '../redux/slice/sizeManager';

import useSize from '../redux/hooks/useSize';


const libre = Libre_Franklin({
  subsets: ["latin"],
  weight: '800'
});
const teko = Teko({
  subsets: ["latin"],
  weight: '600'
});


function Navbar() {
    // const [isClick,setIsClick] = useState(false)
    // const [width,setWidth] = useState(0)
    const [notify,setNotify] = useState(true)
    // const size = useSelector((state:RootState) =>state.size.value)
    const dispatch = useDispatch()
    const [size,isClick,setIsClick] = useSize()


    const IconNotify = (style:string)=>{
          return(
             <div className={`${teko.className} ${style}`} >New</div>
          )      
     }

    // useEffect(() => {

    //     function handleResize() {
    //       setWidth(size)
    //       if(size > 800 || size < 500){
    //         setIsClick(false)
    //       } 
    //     }

    //     dispatch(updateValue(window.innerWidth))
    //     window.addEventListener('resize', handleResize);
    
    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   });
      
  return (
      <nav className={` ${teko.className}  ${isClick=== true? 'mobileopened transition' :'navbarCont'} `} >
        <div className={`sec`}>
          {/* <Image className='logo' src={logo} width={55} height={55} alt='logo'/> */}
            <div className='title'>Italian Pizza  Sydney</div>
            <div className={`${ isClick&& 'rotate transition'}`} onClick={()=> setIsClick(!isClick)}>
             { isClick===false?  size >805  ? null  :notify&& IconNotify('notifyMenuClosed') : null}
                  {isClick === false ?<BiMenuAltRight  size={35} className='menuMobile transition '/>
                    : <IoMdClose className='menuMobile transition'/> }
            </div> 
        </div>
          <ul className={` ${isClick === true ? 'mobileLink' :'navLink' } `}>
               {
                  links.map((link:LINK)=>{
                      const {id,name,path,news} = link
                      return(
                        <Link key={id} href={path} className='links' onClick={()=> setIsClick(false)}>
                            <li className='transition' 
                          >{name} { notify === true? news&& IconNotify('notify') : null } </li>
                        </Link> 
                      )
                  })
              } 
          </ul>           
    </nav>
  )
}

export default Navbar
