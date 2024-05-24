export default {
    name:'special_pack',
    type:'document',
    title:'Special Pack',
    fields:[
        {
            name:'title',
            type:'string',
            title:'title of card'
        },
        {
            name:'slug',
            type:'slug',
            title:'slug of card',
            options:{
                source:'title'
            }
        },
        {
            name:'price',
            type:'text',
            title:'Price'
        },
        {
            name:'entre',
            type:'text',
            title:'Entrè'
        },
        {
            name:'main',
            type:'text',
            title:'Main'
        },
        {
            name:'dessert',
            type:'text',
            title:'Dessert'
        },
        {
            name:'content',
            type:'array',
            title:'Content',
            of:[
                {
                    type:'block',
                }
            ]
        },
        {
            name:'isPack',
            title:'set special pack visible',
            type:'boolean'
        },
    ]
}