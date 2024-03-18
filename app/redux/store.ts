'use client'
import { configureStore } from "@reduxjs/toolkit";
import sizeManager from "./slice/sizeManager"

export const store = configureStore({
    reducer:{
        size:sizeManager,
    }
})

export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;