import { Link } from "react-router-dom";
import styles from './nav.style.module.css';

const Nav = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                <li className={styles.navigationListElement}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.navigationListElement}>
                    <Link to="/about">About</Link>
                </li>
                <li className={styles.navigationListElement}>
                    <Link to="/blog">Blog</Link>
                </li>    
                <li className={styles.navigationListElement}>
                    <Link to="/add-post">Add post</Link>
                </li>
                <li className={styles.navigationListElement}>
                    <Link to="/contact">Contact</Link>
                </li>    
                <li className={styles.navigationListElement}>
                    <Link to="/counter">Counter</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;