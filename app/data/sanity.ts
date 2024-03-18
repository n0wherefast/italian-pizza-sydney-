import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion:'2022-03-07',
    dataset: 'production',
    projectId:'9dhrc4hn',
    useCdn: false,
})