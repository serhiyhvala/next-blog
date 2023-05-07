import Layout from '@components/Layout';
import { urlFor } from '@config/urlImageFor';
import { blogServices } from '@services/index';
import { useQuery } from '@tanstack/react-query';
import {useRouter} from 'next/router'
import styles from '@styles/blogPost.module.scss'
import Button from '@ui/Button';
import Image from 'next/image';
import {PortableText} from '@portabletext/react';

const PostItem = () => {
    const {query: {slug}} = useRouter()
    const {data} = useQuery(['getPostItem'], blogServices.getPosts)
    const post = data?.find(item => item.slug.current === slug)
    console.log(post);
    return (
            post && (
                <Layout title={post.title}>
                    <div className={styles.wrapper}>
		                <div className={styles.post}>
			                <div>
				                <Image src={urlFor(post.mainImage.asset).url()} alt={post.title} width={300} height={300} />
			                </div>
                            <PortableText value={post.body}/>
			            <Button slug='/blog'>Go Back</Button>
		                </div>
                    </div>
                </Layout>
            )
    );
};
export default PostItem;


