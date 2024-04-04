'use client'
import { createSlice } from "@reduxjs/toolkit";

interface GLOBALSTATES {
    isEvent:boolean
    isPack:boolean,
}

const initialState:GLOBALSTATES = {
    isPack : false,
    isEvent : false,
}



export const sizeManager = createSlice({
   name:'globalState',
   initialState,
   reducers:{
    updatePack : (state, action)=>{ state.isPack = action.payload},
    updateEvent : (state, action)=>{ state.isEvent = action.payload},
       
   } 
})
export const {updateEvent,updatePack} = sizeManager.actions
export default sizeManager.reducer