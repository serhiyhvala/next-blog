import {client} from "@config/sanityClient";
import {Category, Project} from "@type/sanityTypes";

export const blogServices = {
    async getCategories() {
        return await client.fetch((`*[_type=='category'] {_id, title}`)) as Category[]
    },
    async getProjects() {
        return await client.fetch(`*[_type=='project'] {mainImage, description, _id, title, preview, github, categories[]->}`) as Project[]
    }
}