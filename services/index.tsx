import {client} from "@config/sanityClient";
import {AboutMe, Category, Project} from "@type/sanityTypes";

export const blogServices = {
    async getCategories() {
        return await client.fetch((`*[_type=='category'] | order(_createdAt desc)`)) as Category[]
    },
    async getProjects() {
        return await client.fetch(`*[_type=='project'] {mainImage, description, _id, title, preview, github, categories[]->}`) as Project[]
    },
    async getAbout() {
        return await client.fetch(`*[_type=='about'] | order(_createdAt asc)`) as AboutMe[]
    }
}
