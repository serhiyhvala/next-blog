import {useQuery} from "@tanstack/react-query";
import {blogServices} from "@services/index";
import styles from './categories.module.scss'
import {useContext} from "react";
import {GlobalContext} from "@providers/globalContext";
const Categories = () => {
    const {data} = useQuery(['getCategories'], blogServices.getCategories)
    const {setCategory, category} = useContext(GlobalContext)
    return (
        <ul className={styles.list}>
            {data?.map(item => {
                const isActive = category === item.title ? styles.active : ''
                return <li className={`${styles.item} ${isActive}`} key={item._id} onClick={() => setCategory(item.title)}>{item.title}</li>
            })}
        </ul>
    );
};

export default Categories;
