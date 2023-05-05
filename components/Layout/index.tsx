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
