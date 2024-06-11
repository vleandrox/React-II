// import styles from './NavButton.module.css'
import { Link } from 'react-router-dom';

function NavButton({title,link}) {
    return (
        <li className="p-[10px] [20px] md:w-full md:text-center md:py-[10px]">
            <Link className="text-white font-bold text-center hover:underline w-[150px] py-[20px] text-[14px]" to={link}>{title}</Link>
        </li>
    );
}

export default NavButton