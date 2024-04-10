import React from 'react'
import './event.scss'
import Image from 'next/image'
import EventWrapped from '@/app/components/wrapped/EventWrapped'
import { client } from '@/app/data/sanity'
export const revalidate = 30 //revalidate at 30 seconds


async function getData(){
    const query = `
    *[_type=='event'] | order(_createdAT desc){
        title,image,place,date,description
      }
    `
    const data = await client.fetch(query)
    return data
}

async function Event() {
const data = await getData()
  return (
   <>
     <EventWrapped data={data} />
   </>
  )
}

export default Event
