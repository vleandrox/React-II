import styles from './NavButton.module.css'
import { Link } from 'react-router-dom';

function NavButton({title,link}) {
    return (
        <li>
            <Link className={styles["nav-a"]} to={link}>{title}</Link>
        </li>
    );
}

export default NavButton