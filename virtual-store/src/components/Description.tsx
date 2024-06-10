import styles from './Description.module.css'

function Description({ product }) {
    return (
        <>
            <div className={styles["product-description-block"]}>
                <h1 className={styles["title"]}>{product.title}</h1>
                <form className={styles["selector"]}>
                    <fieldset>
                        <label className={styles["label"]} htmlFor="color">Color</label>
                        <select id="color">
                            {product.colors.map((each) => (
                                <option key={each} value="Silver">
                                    {each}
                                </option>
                            ))}
                        </select>
                    </fieldset>
                </form>
                <div className={styles["description"]}>
                    <h1>{product.title}</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
                        unde!</p>
                </div>
            </div>

            {/* <div className={styles["product-description-block"]}>
                <h1 className={styles["title"]}>MackBook 15'</h1>
                <form className={styles["selector"]}>
                    <fieldset>
                        <label className={styles["label"]} htmlFor="color">Color</label>
                        <select id="color">
                            <option value="Negro espacial">Negro Espacial</option>
                            <option value="Gris espacial">Gris Espacial</option>
                        </select>
                    </fieldset>
                </form>
                <div className={styles["description"]}>
                    <h1>MackBook Pro 15'</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
                        unde!</p>
                </div>
            </div> */}

            {/* <div className={styles["product-description-block"]}>
                <h1 className={styles["product-title"]}>{product.title}</h1>
                <form className={styles["product-selector"]}>
                    <fieldset className={styles["product-fieldset"]}>
                        <label className={styles["product-label"]} htmlFor="color">Color</label>
                        <select className={styles["product-select"]} id="color">
                            {product.colors.map((each) => (
                                <option key={each} value="Silver">
                                    {each}
                                </option>
                            ))}
                        </select>
                    </fieldset>
                </form>
                <div className={styles["product-description"]}>
                    <span className={styles["product-label"]}>Descripción</span>
                    <p>
                        Experience the power of creativity with the MacBook Pro 13'4.
                        Featuring 8GB of RAM and 512GB of storage, this laptop provides
                        the performance and storage capacity needed for demanding tasks.
                        The sleek design in silver and space gray adds a touch of
                        sophistication. The high-resolution Retina display brings your
                        visuals to life, whether you're editing photos, creating videos,
                        or simply browsing the web. With the latest technology and a
                        lightweight build, the MacBook Pro 13'4 is the perfect companion
                        for professionals and creative individuals alike.
                    </p>
                </div>
            </div> */}
        </>
    )
}

export default Description