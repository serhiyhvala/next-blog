import {defineType} from "sanity";

export default defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'aboutTitle',
            title: 'About Tile',
            type: 'string'
        },
        {
            name: 'aboutImage',
            title: 'About Image',
            type: 'array',
            of: [
                {
                    name: 'aboutImage',
                    title: 'About Image',
                    type: 'image',
                    fields: [
                        {
                            name: 'aboutImageTitle',
                            title: 'About Image Title',
                            type: 'string'
                        }
                    ]
                }
            ]
        }
    ]
})
