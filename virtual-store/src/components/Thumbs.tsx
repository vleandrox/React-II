import styles from './Thumbs.module.css'
import { useState, useEffect } from 'react'

function Thumbs({ product }) {
    const [thumb, setThumb] = useState(product.images[0] || "/mock1.jpg")
    useEffect(() => setThumb(product.images[0]), [product.id]);
    return (
        <>
            <div className={styles["product-images-block"]}>
                <div className={styles["thumbnail-container"]}>
                    {product.images.map((each) => (
                        <img
                            key={each}
                            src={each}
                            alt={product.title}
                            onClick={() => setThumb(each)}
                        />
                    ))}
                </div>
                <img
                    className={styles["main-image"]}
                    id="main-img"
                    src={thumb}
                    alt={product.title} />
            </div>

            {/* <div className={styles["product-images-block"]}>
                <div className={styles["thumbnail-container"]}>
                    <img src={product.images[0]} alt="Descripción de la imagen 1" />
                    <img src={product.images[1]} alt="Descripción de la imagen 2" />
                    <img src={product.images[2]} alt="Descripción de la imagen 3" />
                    <img src={product.images[1]} alt="Descripción de la imagen 3" />
                </div>
                <img className={styles["main-image"]} src={product.images[0]} alt="Descripción de la imagen principal" />
            </div> */}

            {/* <section className={styles["product-images-block"]}>
                <div className={styles["product-images"]}>
                    {product.images.map((each) => (
                        <img
                            className={styles["mini-img"]}
                            key={each}
                            src={each}
                            alt={product.title}
                            onClick={() => setThumb(each)}
                        />
                    ))}
                </div>
                <img
                    className={styles["big-img"]}
                    id="big-img"
                    src={thumb}
                    alt={product.title}
                />
            </section> */}
        </>
    )
}

export default Thumbs
