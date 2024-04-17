'use client'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateValue } from '../../redux/slice/sizeManager';
import { updateEvent } from '@/app/redux/slice/globaleStates';

function EventWrapped(data:any) {
    const {title,image,place,date,description} = data.data[0]
    const  globalStateEvent = useSelector((state:RootState) => state.globaleStates.isEvent)


   
    //  console.log(globalStateEvent)
  return (
<>
    { globalStateEvent == true ? 
    <div className='mainEvent'>
        <div className='titleEvent'>{title}</div>
        <div className="imageEvent"></div>
        {/* <Image src={''} alt='image Of Event'/> */}
        <div className="placeEvent">{place}</div>
        <div className="dateEvent">{date}</div>
        <div className="descEvent">{description}</div>      
    </div>
      :null } 
</>
  )
}

export default EventWrapped
