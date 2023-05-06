import styles from './navbar.module.scss'
import Link from "next/link";
import NavbarData from "@constants/navbar.data";
import {useRouter} from 'next/router'

const Navbar = () => {
    const {pathname} = useRouter()
    console.log(pathname)
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div>
                    <Link href='/'>
                        <span className={styles.logo_title}>Hvala</span>
                        <span className={styles.logo_desc}>.Blog</span>
                    </Link>
                </div>
                <div className={styles.navigation}>
                    <ul className={styles.links}>
                        {
                            NavbarData.map(item => {
                                return (
                                    <li key={item.id} className={pathname === item.slug ? styles.active : ''}>
                                        <Link href={item.slug}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
