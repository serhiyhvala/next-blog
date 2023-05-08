import Layout from '@components/Layout'
import Loader from '@components/Loader'
import { urlFor } from '@config/urlImageFor'
import { PortableText } from '@portabletext/react'
import { blogServices } from '@services/index'
import styles from '@styles/blogPost.module.scss'
import { useQuery } from '@tanstack/react-query'
import Button from '@ui/Button'
import Image from 'next/image'
import { useRouter } from 'next/router'

const PostItem = () => {
  const {
    query: { slug }
  } = useRouter()
  const { data, isLoading } = useQuery(['getPostItem'], blogServices.getPosts)
  const post = data?.find(item => item.slug.current === slug)
  return isLoading ? (
    <Loader />
  ) : (
    post && (
      <Layout title={post.title}>
        <div className={styles.wrapper}>
          <div className={styles.post}>
            <div>
              <Image
                src={urlFor(post.mainImage.asset).url()}
                alt={post.title}
                width={300}
                height={300}
              />
            </div>
            <PortableText value={post.body} />
            <Button slug="/blog">Go Back</Button>
          </div>
        </div>
      </Layout>
    )
  )
}
export default PostItem
