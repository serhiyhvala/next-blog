import {FC, ReactNode} from "react";
import styles from './button.module.scss'
type ButtonProps = {
    slug: string
    children: ReactNode
}

const Button :FC<ButtonProps>= ({slug, children}) => {
    return (
        <a href={slug}>
            <button className={styles.button}>
                {children}
            </button>
        </a>
    );
};

export default Button;
