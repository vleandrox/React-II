import styles from './OnSale.module.css'
import Header from './Header'
import Footer from './Footer'
import OnSaleCard from './OnSaleCard'
// import products from '../assets/products.js'
import { useState,useEffect} from 'react'
import axios from 'axios'
import Product from '../interfaces/Product'

export function OnSale() {
    // const onSaleProducts = products.filter((each) => each.onsale === true);
    return (
        <>
            <Header></Header>
            <main>
                <div>
                    <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
                    <div className={styles["onsale-container"]}>
                        {/* {onSaleProducts.map((each) => (
                            <OnSaleCard
                                key={each.id}
                                id={each.id}
                                title={each.title}
                                price={each.price}
                                color={each.colors[0]}
                                image={each.images[0]}
                            />
                        ))} */}
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export function OnSaleSlide() {
    const [onsale, setOnSale] = useState<Product[]>([]); 
    // const onSaleProducts = products.filter((each) => each.onsale === true);
    useEffect(() => {
        axios.get("/products.json")
            .then((response) => {
                const onsaleproducts = response.data.filter((each:Product) => each.onsale === true);
                setOnSale(onsaleproducts);                
            })
            .catch((error) => console.log(error))
    }, []);

    // Generar el sliders del los productos en Venta
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(4);
    const nextSlide = () => {
        if (to < onsale.length) {
            setFrom(from + 4);
            setTo(to + 4);
        }
    };
    const prevSlide = () => {
        if (from > 0) {
            setFrom(from - 4);
            setTo(to - 4);
        }
    };
    const visibleProducts = onsale.slice(from, to);
    // Finaliza el sliders del los productos en Venta

    return (
        <>
            <div className={styles["offer-container"]}>
                <h2 className="font-bold text-[30px] underline">Ofertas de la semana</h2>
                <button className={styles["prev-offer-button"]} onClick={prevSlide} disabled={from === 0}> {'<'} </button>
                <div className={styles["offer-product-container"]}>
                    {visibleProducts.map((each:Product) => (
                        <div className={styles["product-card"]} key={each.id}>
                            <OnSaleCard 
                                id={each.id}
                                title={each.title}
                                price={each.price}
                                color={each.colors[0]}
                                image={each.images[0]}
                            />
                        </div>
                    ))}
                </div>
                <button className={styles["next-offer-button"]} onClick={nextSlide} disabled={to >= onsale.length}>{'>'}</button>
                {/* <div className={styles["slider-controls"]}>
                    <button onClick={prevSlide} disabled={from === 0}>{'Anterior'}</button>
                    <button onClick={nextSlide} disabled={to >= onSaleProducts.length}>{'Siguiente'}</button>
                </div> */}
            </div>
        </>
    )
}