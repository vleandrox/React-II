import styles from './Cart.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import CartCard from '../components/CartCard'
import CartResume from '../components/CartResume'
import { useEffect, useState } from 'react'
import Product from '../interfaces/Product'
import { useDispatch } from 'react-redux'
import { calcularTotal } from '../store/actions/products'

function Cart() {
    const [productsOnCart, setProductsOnCart] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const products = localStorage.getItem("cart");
        if (products) {
           setProductsOnCart(JSON.parse(products));
           dispatch(calcularTotal({ products: JSON.parse(products) }));
        }
     }, [dispatch]);

    // useEffect(() => {
    //     const storedCart = localStorage.getItem("cart");
    //     console.log(storedCart);
    //     if (storedCart) {
    //         const products = JSON.parse(storedCart);
    //         console.log(products);
    //         setProductsOnCart(products);
    //         dispatch(calcularTotal({ products }));            
    //     } else {
    //         setProductsOnCart([]);
    //         console.log("No hay productos en el carrito");
    //     }
    // }, [dispatch]);
    

    // useEffect(() => {
    //     if (localStorage.getItem("cart")) {
    //         const products = JSON.parse(localStorage.getItem("cart"));
    //         setProductsOnCart(products);
    //         dispatch(calcularTotal({ products }));            
    //     }
    // },[]);

    return (
        <>
            <Header></Header>
            <Hero first={"Tecnologia"} second={"Renovada"}></Hero>
            <main className={styles["main-cart"]}>
                <div className={styles["cartproduct-container"]}>
                    <div className="flex flex-grow basis-[60%] flex-col gap-[20px]">
                        {productsOnCart.map((each: Product) => (
                            <CartCard key={each.id} product={each}></CartCard>
                        ))}
                        {/* <CartCard title="iPad 14 pro" color="black" price="800000" image="https://i.postimg.cc/kX8PKZpq/ipad.jpg" /> */}
                    </div>
                    {/* <div className={styles["product-list"]}>
                        <article className={styles["product-card"]}>
                            <img className={styles["product-img"]} src="https://i.postimg.cc/kX8PKZpq/ipad.jpg" alt="ipad" />
                            <div className={styles["product-info"]}>
                                <strong className={styles["product-title"]}>iPad Pro 13</strong><span className={styles["product-color"]}>- Silver</span>
                                <p className={styles["product-description"]}> Celular de alta gamma de 12.9 pulgadas.</p>
                                <div className={styles["product-quantity"]}>
                                    <input className={styles["product-input"]} type="number" name="quantity" value="1" min="1" id="P7Q8R90" />
                                </div>
                            </div>
                            <strong className={styles["price"]}>AR$ $800000</strong>
                        </article>
                        <article className={styles["product-card"]}>
                            <img className={styles["product-img"]} src="https://i.postimg.cc/kX8PKZpq/ipad.jpg" alt="ipad" />
                            <div className={styles["product-info"]}>
                                <strong className={styles["product-title"]}>iPad Pro 13</strong><span className={styles["product-color"]}>- Silver</span>
                                <p className={styles["product-description"]}> Celular de alta gamma de 12.9 pulgadas.</p>
                                <div className={styles["product-quantity"]}>
                                    <input className={styles["product-input"]} type="number" name="quantity" value="1" min="1" id="P7Q8R90" />
                                </div>
                            </div>
                            <strong className={styles["price"]}>AR$ $800000</strong>
                        </article>
                        <article className={styles["product-card"]}>
                            <img className={styles["product-img"]} src="https://i.postimg.cc/kX8PKZpq/ipad.jpg" alt="ipad" />
                            <div className={styles["product-info"]}>
                                <strong className={styles["product-title"]}>iPad Pro 13</strong><span className={styles["product-color"]}>- Silver</span>
                                <p className={styles["product-description"]}> Celular de alta gamma de 12.9 pulgadas.</p>
                                <div className={styles["product-quantity"]}>
                                    <input className={styles["product-input"]} type="number" name="quantity" value="1" min="1" id="P7Q8R90" />
                                </div>
                            </div>
                            <strong className={styles["price"]}>AR$ $800000</strong>
                        </article>
                    </div> */}
                    <CartResume></CartResume>
                    {/* <div className={styles["cart-resume"]}>
                        <div className={styles["cart-data"]}>
                            <h2 className={styles["cart-title"]}><span>Resumen </span><span>del </span><span>pedido</span></h2>
                            <div className={styles["cart-total"]}>
                                <h3>Total</h3>
                                <strong className={styles["cart-price"]}>$800000</strong>
                            </div>
                            <small className={styles["cart-tax"]}>Incluye impuesto PAIS y percepción AFIP.</small>
                        </div>
                        <button className={styles["cart-btn"]} id="buy" type="button">COMPRAR</button>
                    </div> */}
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Cart