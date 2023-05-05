import { THome } from '@type/homeTypes'
import {v4 as uuid} from 'uuid'
export const HeroData: THome[] = [
    {
        title: 'Instagram',
        link: 'https://instagram.com/chronicflaame',
        icon: 'BsInstagram',
        id: uuid()
    },
    {
        title: 'Telegram',
        link: 'https://t.me/wyrtnw23',
        icon: 'BsTelegram',
        id: uuid()
    },
    {
        title: 'Github',
        link: 'https://github.com/serhiyhvala',
        icon: 'BsGithub',
        id: uuid()
    },
    {
        title: 'About Me',
        link: '/about-me',
        icon: 'BsWindowDock',
        id: uuid()
    },
    {
        title: 'Projects',
        link: '/projects',
        icon: 'BsFileBarGraph',
        id: uuid()
    },
    {
        title: 'Blog',
        link: '/blog',
        icon: 'BsFillFileEarmarkFontFill',
        id: uuid()
    }
]
