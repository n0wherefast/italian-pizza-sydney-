import { PACKAGES } from '@/app/data/interface';
import { client } from '@/app/data/sanity';
import React from 'react'
import Card from '@/app/components/Card';
import './pack.scss'
import WrappedPackages from '@/app/components/wrapped/WrappedPackages';

async function getData() {
  const query =`
  *[_type=='packages'] | order(_createdAT desc){
    title,price,entre,main,dessert
  }`;

  const data = await client.fetch(query)
  return data;
}

async function  Packages() {
  const data = await getData() 

  return (
    <>
    <WrappedPackages data={data}/>
        {/* <div className='main'>
          {data.map((pack:PACKAGES ,id:number)=>{  
            const {title,price,entre,main,dessert } = pack
            return(
              <div className='' key={id}>
                <Card title={title} price={price}  entre={entre} main={main} dessert={dessert}/>
              </div>
            )
          })}
        </div> 
    </WrappedPackages> */}
  </>
  )
}

export default Packages
