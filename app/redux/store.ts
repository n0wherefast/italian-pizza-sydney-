'use client'
import { configureStore } from "@reduxjs/toolkit";
import sizeManager from "./slice/sizeManager"
import globaleStates from "./slice/globaleStates";

export const store = configureStore({
    reducer:{
        size:sizeManager,
        globaleStates:globaleStates,

    }
})

export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;