'use client'
import Image from 'next/image'
import React,{useState} from 'react'

function GalleryWrapped({data}:any) {
    const photosOne = data.slice(0,9)
    const photosTwo = data.slice(10,19)
    const photosThree = data.slice(20,29)
    console.log(data)
    const [click, setClick] = useState(true)
  return (
    <div className='containGal'>
    <div className='gallery'>

       {/* <Image src={photos[0].download_url}  alt='p' width={200} height={200} /> */}
    <div className='colGal'>
      {photosOne.map((pic:any , index:number)=>{
        return(
            <Image onClick={()=>setClick(!click)}  className='imageGal' key={index} src={pic.download_url} width={pic.width/8}height={pic.height/8} alt='photo'/>
        )
         })}
    </div>
    <div className='colGal'>
      {photosTwo.map((pic:any , index:number)=>{
        return(
            <Image className='image' key={index} src={pic.download_url} width={pic.width/8}height={pic.height/8} alt='photo'/>
        )
         })}
    </div>
    <div className='colGal'>
      {photosThree.map((pic:any , index:number)=>{
        return(
            <Image className='imageGal' key={index} src={pic.download_url} width={pic.width/8}height={pic.height/8} alt='photo'/>
        )
         })}
    </div>

    </div>
    
</div>
  )
}

export default GalleryWrapped
