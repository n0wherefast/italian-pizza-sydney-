export interface LINK {
    id:number,
    name:string,
    path:string
    delay:number,
    news?:boolean,
}
const dateMin =  () => {
  const today =  new Date().toJSON().slice(0,10)
  return  today
}
const dateMax =  () => {
  const today =  new Date().toJSON().slice(0,4)
  const n = Number(today)+2
  const nn = n.toString()
  return  new Date(nn).toJSON().slice(0,10)
}


export const refForm = [
    {
        id:'name',
        name:'Name',
        type:'text'
      },
      {
        id:'date',
        name:'Date',
        type:'date',
        min: dateMin(),
        max: dateMax()
      },
      {
        id:'time',
        name:'Time',
        type:'time'
      },
      {
        id:'phone',
        name:'Phone',
        type:'tel'
      },
      {
        id:'email',
        name:'Email',
        type:'email'
      },
      {
        id:'address',
        name:'Address',
        type:'text'
      },
      {
        id:'number of adults',
        name:'numberOfAdults',
        type:'number',
        min:'0'
      },
      {
        id:'number of kids under 6-12',
        name:'numberOfKidsUnder6-12',
        type:'number',
        min:'0'
      },
  ]


export const  links = [
    {id:0,
    name:'Home',
    path:'/',
    delay:0.3,
    news: false
    },
    {id:1,
    name:'Packages',
    path:'/pages/packages',
    delay:0.4,
    news : true
    },
    {id:2,
    name:'Menu',
    path:'/pages/menu',
    delay:0.6,
    news: false
    },
    {id:3,
    name:'Gallery',
    path:'/pages/gallery',
    delay:0.8,
    news: false
    },
    // {id:4,
    // name:'Arancini',
    // path:'/pages/arancini',
    // delay:1
    // },
    {id:5,
    name:'About',
    path:'/pages/about',
    delay:1,
    news: false
    },
    // {id:6,
    // name:'Contact',
    // path:'/pages/contact',
    // delay:1,
    // news: false
    // },
]
// export const  linksSubMenu = [
//     {id:0,
//     name:'Home',
//     path:'/',
//     delay:0.3,
//     news: false
//     },
//     {id:1,
//     name:'Packages',
//     path:'/pages/menu',
//     delay:0.4,
//     news : true
//     },
//     {id:4,
//     name:'Arancini',
//     path:'/pages/arancini',
//     delay:1,
//     news: false
//     },
 
// ]