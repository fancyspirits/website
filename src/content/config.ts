import { z, defineCollection } from "astro:content";

const socialLink = z.object({
    name: z.string(),
    icon: z.string(),
    url: z.string(),
});

const albumTrack = z.object({
    name: z.string(),
    feat: z.string().optional(),
    links: z.array(socialLink),
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

const releaseCollection = defineCollection({
    type: "content",
    schema: z.object({
        draft: z.boolean().optional(),
        id: z.string(),
        name: z.string(),
        imageSrc: z.string(),
        artists: z.string(), // TODO reference
        genre: z.string(),
        // TODO string date?
        releaseDate: z.object({
            year: z.number(),
            month: z.number(),
            day: z.number(),
        }),
        embedYt: z.string(),
        links: z.array(socialLink),
        tracks: z.array(albumTrack).optional(),
    }),
});

export const collections = {
    artists: artistCollection,
    releases: releaseCollection,
};