import React from 'react'
import './gallery.scss'
import GalleryWrapped from '@/app/components/wrapped/GalleryWrapped'
import { client } from '@/app/data/sanity'

const query = `  *[_type == 'galleryContent']{
  title,id,image
}`

async function getData() {
   const data = await client.fetch(query)
  // const data =  await fetch('https://picsum.photos/v2/list')
  //     .then(response => response.json())
  //     .then(json => json)
      return data
}


getData()

export const metadata ={
  title: 'Gallery'
}
   

async function Gallery() {
  const data = await getData()
  return (
    <>
    <GalleryWrapped data={data} />
    </>
  )
}

export default Gallery
