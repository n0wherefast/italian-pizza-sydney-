
export interface PACKAGES {
    title:string;
    price:string;
    entre:string;
    main:string;
    dessert:string;
    isPack? :boolean;
}
export interface MENU {
    title:string;
    ingredients:string;
}
export interface DATA{
    data:{
       dataPack:any,
       dataSpecialPack: any, 
    },
    
}


export interface CARD{
    title: string,
    price : string,
    entre : string,
    main : string,
    dessert : string,
    special? : boolean,
}