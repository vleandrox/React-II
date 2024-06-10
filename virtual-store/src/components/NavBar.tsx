import styles from './NavBar.module.css'
import NavButton from './NavButton';

function NavBar() {
    return (
        <nav id="navbar" className={styles["nav"]}>
            <ul>
                <NavButton title="Ofertas" link="/" />
                <NavButton title="Cómo comprar" link="/" />
                <NavButton title="Costos y tarifas" link="/" />
                <NavButton title="Mis pedidos" link="/" />
                <NavButton title="OnSale" link="/onsale" />
            </ul>

        </nav>
    );
}

export default NavBar