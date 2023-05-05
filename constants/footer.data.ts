import {TFooterIcons} from "@type/footerTypes";
import {v4 as uuid} from 'uuid'
export const FooterIconsData: TFooterIcons[] = [
    {
        icon: 'BsGithub',
        link: 'https://github.com',
        id: uuid()
    },
    {
        icon: 'BsTelegram',
        link: 'https://telegram.com',
        id: uuid()
    },
    {
        icon: 'BsInstagram',
        link: 'https://instagram.com',
        id: uuid()
    }
]
