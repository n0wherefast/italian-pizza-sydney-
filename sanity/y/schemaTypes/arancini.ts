export default {
    name:'arancini',
    type:'document',
    title:'Arancini',
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
            name:'ingredients',
            type:'text',
            title:'Ingredients'
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
    ]
}