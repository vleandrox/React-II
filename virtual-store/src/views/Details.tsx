import styles from './Details.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import products from '../assets/products.js'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound.js'
// import ProductCard from '../components/ProductCard.js'
import Thumbs from '../components/Thumbs.js'
import Description from '../components/Description.js'
import Checkout from '../components/Checkout.js'
import { OnSaleSlide } from '../components/OnSale.js'

function Details() {
    const { id } = useParams();
    const product = products.find((each) => each.id == id);
    // const onsale = products.filter((each) => each.onsale).slice(0, 3);
    if (product) {
        return (
            <>
                <Header></Header>
                <main>
                    <div className={styles["containerd"]}>
                        <div className={styles["columns-container"]} id="details">
                            {product && (
                                <div id="details" className={styles["columns-container"]}>
                                    <Thumbs product={product} />
                                    <Description product={product} />
                                    <Checkout product={product} />
                                </div>
                            )}
                        </div>
                        <OnSaleSlide></OnSaleSlide>
                    </div>
                </main>
                <Footer></Footer>
            </>
        )
    }
    else {
        return (<>
            <NotFound />
        </>)

    }
    return (<>
    </>);
}

export default Details
