'use client'
import React from 'react'
import HomePage from '@/app/pages/home/page'
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from "@reduxjs/toolkit/query";
import { updatePack} from '@/app/redux/slice/globaleStates';

function MainWrapped(data:any) {
    // const dispatch = useDispatch()
    // dispatch(updatePack(data.data))
    // console.log(data)
  return (
    <>
       <HomePage/>
    </>
  )
}

export default MainWrapped
