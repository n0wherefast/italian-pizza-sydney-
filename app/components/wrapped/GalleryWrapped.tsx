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
    <div className='contain'>
    <div className= {` ${click === true? 'gallery'  : 'red'} `}>

       {/* <Image src={photos[0].download_url}  alt='p' width={200} height={200} /> */}
    <div className='col'>
      {photosOne.map((pic:any , index:number)=>{
        return(
            <Image onClick={()=>setClick(!click)}  className='image' key={index} src={pic.download_url} width={pic.width/8}height={pic.height/8} alt='photo'/>
        )
         })}
    </div>
    <div className='col'>
      {photosTwo.map((pic:any , index:number)=>{
        return(
            <Image className='image' key={index} src={pic.download_url} width={pic.width/8}height={pic.height/8} alt='photo'/>
        )
         })}
    </div>
    <div className='col'>
      {photosThree.map((pic:any , index:number)=>{
        return(
            <Image className='image' key={index} src={pic.download_url} width={pic.width/8}height={pic.height/8} alt='photo'/>
        )
         })}
    </div>

    </div>
    
</div>
  )
}

export default GalleryWrapped
