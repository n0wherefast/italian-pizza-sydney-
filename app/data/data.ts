export interface LINK {
    id:number,
    name:string,
    path:string
    delay:number,
    news?:boolean,
}

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
    {id:6,
    name:'Contact',
    path:'/pages/contact',
    delay:1,
    news: false
    },
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