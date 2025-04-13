import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        pages: defineCollection({
            type: 'page',
            source: 'pages/*.md',
            schema: z.object({
                meta: z.object({
                    title: z.string(),
                    description: z.string(),
                }),
                hero: z.object({
                    img: z.string()
                }),
                drawer: z.string()
            })
        }),
        theProject: defineCollection({
            type: 'page',
            source: 'the-project/*.md',
            schema: z.object({
                meta: z.object({
                    title: z.string(),
                    description: z.string(),
                }),
                hero: z.object({
                    img: z.string()
                }),
                drawer: z.string()
            })
        })
    }
})
