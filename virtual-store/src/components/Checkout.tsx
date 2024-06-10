import styles from './Checkout.module.css'
import { useState, useRef, useEffect } from 'react';

interface Product {
    id: number
    price: number;
    quantity: number;
    total: number;
    units: number
}

interface CheckoutProps {
    product: Product;
}

function Checkout({ product }: CheckoutProps) {
    const [quantity, setQuantity] = useState(1);
    const [button, setButton] = useState(false);
    const units = useRef(1)
    const total = (product.price * quantity).toFixed(2);

    // let productsInStorage = [];
    // !localStorage.getItem("cart")
    //     ? localStorage.setItem("cart", JSON.stringify([])) 
    //     : (productsInStorage = JSON.parse(localStorage.getItem("cart")));

    useEffect(() => {
        const productsInStorage = JSON.parse(localStorage.getItem("cart") || "[]");
        const one = productsInStorage.find(each => each.id === product.id);
        if (one) {
            setQuantity(one.units);
            setButton(true);
        } else {
            setQuantity(1);
            setButton(false);
        }
    }, [product.id]);

    const manageCart = () => {
        let productsInStorage = JSON.parse(localStorage.getItem("cart") || "[]");

        const one = productsInStorage.find(each => each.id === product.id);
        if (!one) {
            product.units = quantity;
            productsInStorage.push({ ...product, total });
            setButton(true);
        } else {
            productsInStorage = productsInStorage.filter(each => each.id !== product.id);
            setButton(false);
        }
        localStorage.setItem("cart", JSON.stringify(productsInStorage));
    };

    return (
        <>
            <div className={styles["product-checkout-block"]}>
                <div className={styles["checkout-container"]}>
                    <span className={styles["checkout-total-label"]}>Total:</span>
                    <h2 id="price" className={styles["checkout-total-price"]}>$ {total}</h2>
                    <p className={styles["checkout-description"]}>
                        Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
                        haciendo la solicitud en AFIP.
                    </p>
                    <ul className={styles["checkout-policy-list"]}>
                        <li>
                            <span className={styles["policy-icon"]}><img src="../truck.png" alt="Truck" /></span>
                            <span className={styles["policy-desc"]}>Agrega el producto al carrito para conocer los costos de envío</span>
                        </li>
                        <li>
                            <span className={styles["policy-icon"]}><img src="../plane.png" alt="Plane" /></span>
                            <span className={styles["policy-desc"]}>Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal</span>
                        </li>
                    </ul>
                    <div className={styles["checkout-process"]}>
                        <div className={styles["top"]}>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                ref={units}
                                onChange={() => setQuantity(Number(units.current.value))}
                            />
                            <button
                                type="button"
                                className={button ? styles["remove-btn"] : styles["cart-btn"]}
                                onClick={manageCart}>
                                {button ? "Remove from cart" : "Add to cart"}
                            </button>

                            {/* <input type="number" value="1" /> */}
                            {/* <button className={styles["btn-primary"]}>Comprar</button> */}
                        </div>
                        {/* <div className={styles["bottom"]}>
                            <button className={styles["btn-outline"]}>Añadir al Carrito</button>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <div className={styles["product-checkout-block"]}>
                <div className={styles["checkout-container"]}>
                    <span className={styles["checkout-total-label"]}>Total:</span>
                    <h2 className={styles["checkout-total-price"]}>$152.400</h2>
                    <p className={styles["checkout-description"]}>
                        Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
                        haciendo la solicitud en AFIP.
                    </p>
                    <ul className={styles["checkout-policy-list"]}>
                        <li>
                            <span className={styles["policy-icon"]}><img src="assets/truck.png" alt="Truck" /></span>
                            <span className={styles["policy-desc"]}>Agrega el producto al carrito para conocer los costos de envío</span>
                        </li>
                        <li>
                            <span className={styles["policy-icon"]}><img src="assets/plane.png" alt="Plane" /></span>
                            <span className={styles["policy-desc"]}>Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal</span>
                        </li>
                    </ul>
                    <div className={styles["checkout-process"]}>
                        <div className={styles["top"]}>
                            <input type="number" value="1" />
                            <button className={styles["btn-primary"]}>Comprar</button>
                        </div>
                        <div className={styles["bottom"]}>
                            <button className={styles["btn-outline"]}>Añadir al Carrito</button>
                        </div>
                    </div>
                </div>
            </div> */}
            
            {/* <div className={styles["product-checkout-block"]}>
                <div className={styles["checkout-container"]}>
                    <span className={styles["checkout-total-label"]}>Total:</span>
                    <h2 id="price" className={styles["checkout-total-price"]}>
                        $ {total}
                    </h2>
                    <p className={styles["checkout-description"]}>
                        Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                        50711 haciendo la solicitud en AFIP.
                    </p>
                    <ul className={styles["checkout-policy-list"]}>
                        <li>
                            <span className={styles["policy-icon"]}><img src="../truck.png" alt="Truck" /></span>
                            <span className={styles["policy-desc"]}>Agrega el producto al carrito para conocer los costos de envío</span>
                        </li>
                        <li>
                            <span className={styles["policy-icon"]}><img src="../plane.png" alt="Plane" /></span>
                            <span className={styles["policy-desc"]}>Recibí aproximadamente entre 10 y 15 días hábiles,seleccionando envío normal</span>
                        </li>
                    </ul>
                    <div className={styles["checkout-process"]}>
                        <div className={styles["top"]}>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                ref={units}
                                onChange={() => setQuantity(Number(units.current.value))}
                            />
                            <button
                                type="button"
                                className={button ? styles["remove-btn"] : styles["cart-btn"]}
                                onClick={manageCart}>
                                {button ? "Remove from cart" : "Add to cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Checkout