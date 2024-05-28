export default {

    name:'event',
    type:'document',
    title:'Event',
    fields:[
        {
            name:'id',
            type:'number',
            title:'ID'
        },
        {
            name:'title',
            type:'string',
            title:'title of event'
        },
        {
            name:'slug',
            type:'slug',
            title:'slug of event',
            options:{
                source:'title'
            }
        },
        {
            name:'image',
            type:'image',
            title:'Image'
        },        
        {
            name:'place',
            type:'text',
            title:'Place Of Event'
        },
        {
            name:'date',
            type:'text',
            title:'Date Of Event'
        },
        {
            name:'description',
            type:'text',
            title:'Description'
        },
        {
            name:'isEvent',
            title:'set event viible',
            type:'boolean'
        },
        // {
        //     name:'content',
        //     type:'array',
        //     title:'Content',
        //     of:[
        //         {
        //             type:'block',
        //         }
        //     ]
        // },
    ]
        
}