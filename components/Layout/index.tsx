import Head from "next/head";
import Navbar from "../Navbar";
import {FC, ReactNode} from "react";
import styles from './layout.module.scss'
import Footer from "@components/Footer";
import {concatTitle} from "@utils/concatTitle";

type LayoutProps = {
    children: ReactNode
    title: string
}

const Layout: FC<LayoutProps> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{concatTitle(title)}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />  
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />  
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            </Head>
            <Navbar/>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;
