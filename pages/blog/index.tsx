import Layout from "@components/Layout";
import styles from '@styles/blog.module.scss'
import {useQuery} from "@tanstack/react-query";
import {blogServices} from "@services/index";
import {urlFor} from "@config/urlImageFor";
import Image from "next/image";
import Link from "next/link";
import {convertDateToString} from "@utils/convertDateToString";
import Loader from "@components/Loader";

const Blog = () => {
    const {data, isLoading} = useQuery(['getPosts'], blogServices.getPosts)
    return (
        <Layout title='Blog'>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>My Blog</h2>
                {isLoading ? <Loader /> : (
                    <div className={styles.posts}>
                    {
                        data?.map(({mainImage, title, slug, _createdAt, _id}) => (
                            <Link href={`/blog/${slug.current}`} className={styles.post} key={_id}>
                                <Image
                                    src={urlFor(mainImage.asset).url()}
                                    alt={title}
                                    className={styles.img}
                                    width={400}
                                    height={400}
                                />
                                <div className={styles.text}>
                                    <h2>{title}</h2>
                                    {convertDateToString(_createdAt)}
                                </div>
                            </Link>
                        ))
                    }
                </div>
                )}
            </div>
        </Layout>
    );
};

export default Blog;
