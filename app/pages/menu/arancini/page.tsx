import{MENU} from '@/app/data/interface'
import { client } from '@/app/data/sanity'
import './arancini.scss'

async function getData() {
  const query =`
  *[_type=='arancini'] | order(_createdAT desc){
    title,ingredients
  }
  `
  const data = await client.fetch(query)
  return  data
}

async function  Arancini() {
const data =  await getData()
  return (
    <div className='main'>
      <div className='imgCont'></div>
     
     <div className='menuList'>
      {data.map((itm:MENU,idx:number) => {
        const {title,ingredients} = itm
        return(
          <div key={idx} className='list'>
              <h1>{title}</h1>
              <p>{ingredients}</p>
          </div>
        )
      })}
    </div> 
    </div>
  )
}

export default  Arancini
