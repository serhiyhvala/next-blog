import styles from '@styles/errorPage.module.scss'
import Button from "@ui/Button";
import Layout from "@components/Layout";
import error404 from '@assets/error404.svg'
import Image from "next/image";

const ErrorPage = () => {
    return (
        <Layout title='Error'>
            <div className={styles.error}>
                <div>
                    <Image src={error404} alt='Erorr'/>
                </div>
                <div className={styles.text}>
                    <h2>Oops, This Page Could Not Be Found.</h2>
                    <p>
                        The page you are looking for might have been removed, had its name
                        changed, or is temporarily unavailable.
                    </p>
                </div>
                <Button slug='/'>Go Home</Button>
            </div>
        </Layout>
    )
}

export default ErrorPage
