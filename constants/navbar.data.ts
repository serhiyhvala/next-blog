import {v4 as uuid} from 'uuid'
import {TNavBar} from "@type/navbarTypes";

const NavbarData: TNavBar[] = [
    {
        title: 'Home',
        slug: '/',
        id: uuid()
    },
    {
        title: 'About Me',
        slug: '/about-me',
        id: uuid()
    },
    {
        title: 'Projects',
        slug: '/projects',
        id: uuid()
    },
    {
        title: 'Blog',
        slug: '/blog',
        id: uuid()
    }
]

export default NavbarData
