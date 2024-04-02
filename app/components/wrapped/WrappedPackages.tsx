'use client'
import React, { useEffect, useState } from 'react'
import { PACKAGES,DATA } from '@/app/data/interface';
import Card from '../Card';
import useSize from '@/app/hooks/useSize';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';
// import '../../pages/packages/pack.scss'
import { EffectCoverflow, Pagination ,Autoplay} from 'swiper/modules';

import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateValue } from '../../redux/slice/sizeManager';
import { updatePack } from '@/app/redux/slice/globaleStates';


function WrappedPackages ( data:DATA ) {
    const {dataPack} = data.data
    const {title,isPack,dessert,main,entre,price}:PACKAGES = data.data.dataSpecialPack[0]
    
    
    const [size,width,isClick] = useSize()
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(updatePack(isPack))
      
    },[])

    console.log(isPack)
    



    return (
<> 
<div className='mainP'>
   {size < 1024 ?
    
        <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                // slidesPerView={'auto'}
                // autoplay={{
                //     delay:4500,
                //     disableOnInteraction:false
                // }}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 500,
                modifier: 1,
                slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className='newSwiper'
        >
        
            {dataPack.map((pack:PACKAGES ,id:number)=>{  
                const {title,price,entre,main,dessert } = pack
                return(
                <SwiperSlide className='slide' key={id}>
                    <Card title={title} price={price}  entre={entre} main={main} dessert={dessert}/>
                </SwiperSlide>
                )
            })}
        
        </Swiper>
    :
       <div className='mainP'>
          {dataPack.map((pack:PACKAGES ,id:number)=>{  
            const {title,price,entre,main,dessert } = pack
            return(
              <div className='' key={id}>
                <Card title={title} price={price}  entre={entre} main={main} dessert={dessert}/>
              </div>
            )
          })}
         </div>    
    }
 {
  isPack == true?<Card title={title} price={price}  entre={entre} main={main} dessert={dessert} special={isPack} /> : null
 }
    
</div>   
    </>
  )
}

export default WrappedPackages
