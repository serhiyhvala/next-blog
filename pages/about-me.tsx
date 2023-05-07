import Layout from "@components/Layout";
import styles from '@styles/aboutMe.module.scss'
import Image from "next/image";
import avatar from '@assets/avatar.png'
import {useQuery} from "@tanstack/react-query";
import {blogServices} from "@services/index";
import Loader from "@components/Loader";
import {urlFor} from "@config/urlImageFor";

const AboutMe = () => {
    const {data, isLoading} = useQuery(['getAbout'], blogServices.getAbout)
    return (
        <Layout title='About Me'>
            <div className={styles.wrapper}>
                <div className={styles.about}>
                    <div className={styles.text}>
                        <h2>Hey, my name is <span>Sergiy</span></h2>
                        <p>
                            I&apos;m a front-end developer skilled in React, HTML, CSS, SASS, GIT, and
                            more. Dedicated to self-education and passionate about personal
                            projects. When I&apos;m not coding, I enjoy, reading, and volunteering for
                            social causes.<br/>
                            <span className={styles.greeting}>Welcome to my blog!</span>
                        </p>
                    </div>
                    <div>
                        <Image src={avatar} alt='Avatar Image'/>
                    </div>
                </div>
                {isLoading ? <Loader/> : (
                    data?.map(({aboutTitle, aboutImage}) => (
                        <>
                            <h2 className={styles.title}>{aboutTitle}</h2>
                            <div className={styles.cardContainer}>
                                {aboutImage.map(({aboutImageTitle, aboutImageDesc, asset, _key}) => (
                                    <div className={styles.card} key={_key}>
                                        <Image src={urlFor(asset).url()} alt={aboutImageTitle} width={200}
                                               height={200}/>
                                        <h2>{aboutImageTitle}</h2>
                                    </div>
                                ))}
                            </div>
                        </>
                    ))
                )}
            </div>
        </Layout>
    );
};

export default AboutMe;
