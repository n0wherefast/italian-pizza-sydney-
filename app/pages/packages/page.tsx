import { PACKAGES } from '@/app/data/interface';
import { client } from '@/app/data/sanity';
import React from 'react'
import Card from '@/app/components/Card';
import './pack.scss'
import WrappedPackages from '@/app/components/wrapped/WrappedPackages';
 const queryPack =`
  *[_type=='packages'] | order(_createdAT desc){
    title,price,entre,main,dessert
  }`;
  const querySpecialPack =`
  *[_type=='special_pack'] | order(_createdAT desc){
    title,price,entre,main,dessert,isPack,
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
    </>
  )
}

export default Packages
