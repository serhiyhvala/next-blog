import Layout from "@components/Layout";
import styles from '@styles/projects.module.scss'
import {useQuery} from "@tanstack/react-query";
import {blogServices} from "@services/index";
import Image from "next/image";
import {urlFor} from "@config/urlImageFor";
import Loader from "@components/Loader";
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "@providers/globalContext";
import Categories from "@components/Categories";

const Projects = () => {
    const {data, isLoading} = useQuery(['getProjects'], blogServices.getProjects)
    const {setCategory, category} = useContext(GlobalContext)
    const [projects, setProjects] = useState(data)
    useEffect(() => {
        setProjects(category === 'All' ? data : data?.filter(item => item.categories.find(item => item.title === category)))
    }, [data, category])
    return (
        <Layout title='My projects'>
            <div className={styles.wrapper}>
                <h2 className='text-center text-heading2 py-[10px]'>My Projects</h2>
                {isLoading ? <Loader/> : (
                    <>
                        <Categories/>
                        <div className={styles.projects}>
                            {projects?.map((item) => (
                                <div className={styles.card} key={item._id}>
                                    <Image src={urlFor(item.mainImage).url()} alt={item.title} className={styles.img}
                                           width={400} height={400}/>
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
                                                <li key={item._id} className={styles.tagItem}
                                                    onClick={() => setCategory(item.title)}>#{item.title}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </Layout>
    );
};

export default Projects;
