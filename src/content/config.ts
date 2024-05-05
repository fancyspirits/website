import { z, defineCollection } from "astro:content";

const socialLink = z.object({
    name: z.string(),
    icon: z.string(),
    url: z.string(),
});

const artistCollection = defineCollection({
    type: "content",
    schema: z.object({
        draft: z.boolean().optional(),
        id: z.string(),
        name: z.string(),
        imageSrc: z.string(),
        description: z.string(),
        links: z.array(socialLink),
        backgroundColor: z.string().optional()
    })
});

export const collections = {
    artists: artistCollection
};