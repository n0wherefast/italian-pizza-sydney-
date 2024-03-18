'use client'
import { createSlice } from "@reduxjs/toolkit";

interface SIZEMANAGER {
    value:number,
    checkSize:boolean,
}

const initialState:SIZEMANAGER = {
    value : 0,
    checkSize : false,
}

export const sizeManager = createSlice({
   name:'sizeManager',
   initialState,
   reducers:{
      updateValue:(state,action) =>{state.value = action.payload},
      setCheckSize : (state, action) =>{state.checkSize = action.payload},  
   } 
})
export const {updateValue,setCheckSize} = sizeManager.actions
export default sizeManager.reducer