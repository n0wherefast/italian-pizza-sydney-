'use client'
import React, { useEffect, useState } from 'react'
import { PACKAGES,DATA } from '@/app/data/interface';
import Card from '../Card';
import useSize from '@/app/redux/hooks/useSize';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';
import { EffectCoverflow, Pagination ,Autoplay} from 'swiper/modules';

import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateValue } from '../../redux/slice/sizeManager';


function WrappedPackages ( data:DATA) {
    const packs = data.data
    // const size = useSelector((state:RootState)=>state.size.value)
    const [size,width,isClick] = useSize()

    // const [newSize,setNewSize] = useState(0)

  

    // console.log(size)
  return (
<> 
<div className='main'>
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
        
            {packs.map((pack:PACKAGES ,id:number)=>{  
                const {title,price,entre,main,dessert } = pack
                return(
                <SwiperSlide className='slide' key={id}>
                    <Card title={title} price={price}  entre={entre} main={main} dessert={dessert}/>
                </SwiperSlide>
                )
            })}
        
        </Swiper>
    :
       <div className='main'>
          {packs.map((pack:PACKAGES ,id:number)=>{  
            const {title,price,entre,main,dessert } = pack
            return(
              <div className='' key={id}>
                <Card title={title} price={price}  entre={entre} main={main} dessert={dessert}/>
              </div>
            )
          })}
         </div>    
    }

    <Card title={'lorem'} price={'lorem'}  entre={'lorem'} main={'lorem'} dessert={'lorem'} special={true} />
</div>  
    </>
  )
}

export default WrappedPackages
