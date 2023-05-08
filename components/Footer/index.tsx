import styles from './footer.module.scss'
import {FooterIconsData} from "@constants/footer.data";
import Link from "next/link";
import BsIcon from "@utils/BsIcon";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.icons}>
                    {
                        FooterIconsData.map(item => (
                            <Link href={item.link} target='_blank' className='hover:text-blue' key={item.id}>
                                <BsIcon name={item.icon} size={30}/>
                            </Link>
                        ))
                    }
                </div>
                <div className={styles.text}>Sergiy Hvala | {new Date().getFullYear()}</div>
            </div>
        </footer>
    );
};

export default Footer;
