import {FC, ReactNode} from "react";
import styles from './button.module.scss'
import Link from "next/link";

type ButtonProps = {
    slug: string
    children: ReactNode
}

const Button: FC<ButtonProps> = ({slug, children}) => {
    return (
        <Link href={slug}>
            <button className={styles.button}>
                {children}
            </button>
        </Link>
    );
};

export default Button;
