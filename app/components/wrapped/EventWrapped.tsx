'use client'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateValue } from '../../redux/slice/sizeManager';
import { updateEvent } from '@/app/redux/slice/globaleStates';
import { urlFor } from '@/app/data/sanity';
import Image from 'next/image';

function EventWrapped(data:any) {
    const {title,image,place,date,description} = data.data[0]
    const  globalStateEvent = useSelector((state:RootState) => state.globaleStates.isEvent)


   
    //  console.log(globalStateEvent)
  return (
<>
    { globalStateEvent == true ? 
    <div className='mainEvent'>
        <div className='titleEvent'>{title}</div>
        {/* <div className="imageEvent"></div> */}
        <Image width={500} height={500}  src={urlFor(image).url()} className='imageEvent' alt='image' />
       <div className='detCont'>
            <div className="placeEvent">{place}</div>
            <div className="dateEvent">{date}</div>
       </div> 
        <div className="descEvent">{description} 
          
        </div>      
    </div>
      :null } 
</>
  )
}

export default EventWrapped
