import Nav from "../nav/Nav";
import styles from './header.style.module.css';

const Header = () => {
    return (
        <header>
            <h1 className={styles.headerLogo}>Moja aplikacja</h1>
            <Nav />
        </header>
    )
}

export default Header;