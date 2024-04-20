'use client'
import { createSlice } from "@reduxjs/toolkit";

interface GLOBALSTATES {
    isEvent:boolean
    isPack:boolean,
    isConsent:boolean
}

const initialState:GLOBALSTATES = {
    isPack : false,
    isEvent : false,
    isConsent : false,
}



export const sizeManager = createSlice({
   name:'globalState',
   initialState,
   reducers:{
    updatePack : (state, action)=>{ state.isPack = action.payload},
    updateEvent : (state, action)=>{ state.isEvent = action.payload},
    updateConsent : (state, action)=>{ state.isConsent = action.payload},
       
   } 
})
export const {updateEvent,updatePack,updateConsent } = sizeManager.actions
export default sizeManager.reducer