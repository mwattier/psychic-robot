import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.object({
            name: z.string(),
            avatar: z.string(),
        }),
        imageThumb: z.object({
            url: z.string(),
            alt: z.string(),
        }),

        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),

        tags: z.array(z.string()),
    }),
});

export type PostsTypes = {
    title: string;
    pubDate: Date;
    description: string;
    author: {
        name: string;
        avatar: string;
    };
    imageThumb: {
        url: string;
        alt: string;
    };
    image: {
        url: string;
        alt: string;
    };
    tags: string[];
};

export const collections = {
    posts: postsCollection,
};
