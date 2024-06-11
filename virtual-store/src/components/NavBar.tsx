// import styles from './NavBar.module.css'
import NavButton from './NavButton';

function NavBar() {
    return (
        <nav id="navbar" className="w-full max-w-[1200px] mt-[10px] ">
            <ul className="flex flex-col items-center md:flex-row justify-around m-0 p-0">
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