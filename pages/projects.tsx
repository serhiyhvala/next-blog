import Layout from "@components/Layout";
import styles from '@styles/projects.module.scss'
import {useQuery} from "@tanstack/react-query";
import {blogServices} from "@services/index";
import Image from "next/image";
import {urlFor} from "@config/urlImageFor";

const Projects = () => {
    const {data} = useQuery(['getProjects'], blogServices.getProjects)
    console.log(data)
    return (
        <Layout title='My projects'>
            <div className={styles.wrapper}>
                <h2 className='text-center text-heading2 py-[10px]'>My Projects</h2>
                <div className={styles.projects}>
                    {data?.map((item) => (
                        <div className={styles.card} key={item._id}>
                            <Image src={urlFor(item.mainImage).url()} alt={item.title} className={styles.img} width={400} height={400}/>
                            <div className={styles.text}>
                                <h2 className={styles.title}>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                            <div className={styles.links}>
                                <a href={item.preview} target='_blank' className={styles.link}>
                                    Live Demo
                                </a>
                                <a href={item.github} target='_blank' className={styles.link}>
                                    Code
                                </a>
                            </div>
                            <div className={styles.tagsContainer}>
                                <ul className={styles.tags}>
                                    {item.categories.map(item => (
                                        <li key={item._id}>#{item.title}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
