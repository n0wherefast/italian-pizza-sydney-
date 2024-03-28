'use client'
import React ,{Suspense}from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import LoadingPage from '../components/LoadingPage'

function ReduxProvider({children}:any) {
  return (
  
      <Provider store={store} >
          <Suspense fallback={<LoadingPage/>}>
        {children}
         </Suspense>
      </Provider>
   
   
  )
}

export default ReduxProvider
