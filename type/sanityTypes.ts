export interface BlogItem {
    _rev: string
    _type: string
    _id: string
    title: string
    slug: Slug
    _updatedAt: string
    _createdAt: string
    mainImage: MainImage
    body: Body[]
}

export interface Body {
    _key: string
    _type: string
    children: Children[]
    markDefs: any[]
    style: string
}

export interface Children {
    _key: string
    _type: string
    marks: string[]
    text: string
}


export interface Slug {
    current: string
    _type: string
}

export interface AboutMe {
    aboutImage: AboutImage[],
    _id: string
    aboutTitle: string
}

export interface AboutImage {
    aboutImageTitle: string
    _key: string
    asset: Asset
    _type: string
}

export interface Project {
    preview: string
    github: string
    categories: Category[]
    mainImage: MainImage
    _id: string
    title: string
    description: string
}


export interface Category {
    _rev: string
    _type: string
    _id: string
    title: string
    _updatedAt: string
    _createdAt: string
}

export interface MainImage {
    asset: Asset
    _type: string
}

export interface Asset {
    _ref: string
    _type: string
}
