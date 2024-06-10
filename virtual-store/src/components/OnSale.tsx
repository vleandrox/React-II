import styles from './OnSale.module.css'
import Header from './Header'
import Footer from './Footer'
import OnSaleCard from './OnSaleCard'
import products from '../assets/products.js'
import { useState } from 'react'

export function OnSale() {
    const onSaleProducts = products.filter((each) => each.onsale === true);
    return (
        <>
            <Header></Header>
            <main>
                <div>
                    <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
                    <div className={styles["onsale-container"]}>
                        {onSaleProducts.map((each) => (
                            <OnSaleCard
                                key={each.id}
                                id={each.id}
                                title={each.title}
                                price={each.price}
                                color={each.colors[0]}
                                image={each.images[0]}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export function OnSaleSlide() {
    const onSaleProducts = products.filter((each) => each.onsale === true);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(4);
    const nextSlide = () => {
        if (to < onSaleProducts.length) {
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
    const visibleProducts = onSaleProducts.slice(from, to);
    return (
        <>
            <div className={styles["offer-container"]}>
                <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
                <button className={styles["prev-offer-button"]} onClick={prevSlide} disabled={from === 0}> {'<'} </button>
                <div className={styles["offer-product-container"]}>                    
                    {visibleProducts.map((each) => (
                        <div className={styles["product-card"]}>
                        <OnSaleCard
                            key={each.id}
                            id={each.id}
                            title={each.title}
                            price={each.price}
                            color={each.colors[0]}
                            image={each.images[0]}
                        />
                        </div>
                    ))}                                        
                </div>
                <button className={styles["next-offer-button"]} onClick={nextSlide} disabled={to >= onSaleProducts.length}>{'>'}</button>
                {/* <div className={styles["slider-controls"]}>
                    <button onClick={prevSlide} disabled={from === 0}>{'Anterior'}</button>
                    <button onClick={nextSlide} disabled={to >= onSaleProducts.length}>{'Siguiente'}</button>
                </div> */}
            </div>
        </>
    )
}