import Layout from "@components/Layout";
import styles from '@styles/home.module.scss'
import avatar from '@assets/avatar.png'
import Image from "next/image";
import BsIcon from "@utils/BsIcon";
import Link from "next/link";
import {HeroData} from "@constants/home.data";
import PhraseGenerator from "@components/PhraseGenerator";
import Button from "@ui/Button";

export default function Home() {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <h2 className={styles.title}>👋 Hey! My name is <span>Sergiy.</span></h2>
                        <p>Welcome to <span className={styles.blog}>My Blog</span></p>
                    </div>
                    <PhraseGenerator/>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.leftSection}>
                        <div className={styles.avatar}>
                            <Image src={avatar} alt='avatar'/>
                        </div>
                        <div className={styles.paragraph}>
                            <p>
                                I enjoy teaching web dev by coding live project builds in public.
                            </p>
                            <Button slug='/projects'>View my Project</Button>
                        </div>
                    </div>
                    <div className={styles.rightSection}>
                        <h2>Key Link</h2>
                        <div className={styles.links}>
                            {
                                HeroData.map(item => (
                                    <Link href={item.link} className={styles.link} key={item.id}>
                                        <p>{item.title}</p>
                                        <BsIcon name={item.icon} size={20}/>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
