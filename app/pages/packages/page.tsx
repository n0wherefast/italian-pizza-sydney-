import { PACKAGES } from '@/app/data/interface';
import { client } from '@/app/data/sanity';
import React from 'react'
import './pack.scss'
import WrappedPackages from '@/app/components/wrapped/WrappedPackages';
import TableMinSpend from '@/app/components/TableMinSpend';
export const revalidate = 30 //revalidate at 30 seconds

 const queryPack =`
  *[_type=='packages']{
    title,price,entre,main,dessert
  }`;
  const querySpecialPack =`
  *[_type=='special_pack']{
    title,price,entre,main,dessert 
  }`;


async function getData(query:string) {
  const data = await client.fetch(query)
  return data;
}


export const metadata ={
  title: 'Packages'
}



async function  Packages() {
  const dataPack = await getData(queryPack) 
  const dataSpecialPack = await getData(querySpecialPack) 

  return (
    <>
      <WrappedPackages data={{dataPack,dataSpecialPack}} />
      <div className='table'>
        <TableMinSpend/>
      </div>
      
    </>
  )
}

export default Packages
