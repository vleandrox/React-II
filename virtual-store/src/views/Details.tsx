// import styles from './Details.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import products from '../assets/products.js'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound.js'
// import ProductCard from '../components/ProductCard.js'
import Thumbs from '../components/Thumbs.js'
import Description from '../components/Description.js'
import Checkout from '../components/Checkout.js'
import { OnSaleSlide } from '../components/OnSale.js'
import axios from 'axios'
import { useState,useEffect} from 'react'
import Product from '../interfaces/Product.js'

function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product>();

    // Tambien funciona con este codigo pero qutiar el import Product de arriba
    // const [product, setProduct] = useState<Product>({
    //     id: "",
    //     title: "",
    //     price: 0,
    //     images: [],
    //     colors: [],
    //   });

    useEffect(() => {
        axios.get("/products.json")
            .then((response) => {
                const detailProduct = response.data.find((each:Product) => each.id === id);
                setProduct(detailProduct);
            })
            .catch((error) => console.log(error))
    }, [id]);

    // const product = products.find((each) => each.id == id);
    // const onsale = products.filter((each) => each.onsale).slice(0, 3);

    if (product) {
        return (
            <>
                <Header></Header> 
                <main>
                    <div className="max-w-[1200px] mx-auto p-[20px]">
                        {/* <div id="details" className=" "> */}
                         {product && (
                                <div id="details" className="flex flex-col gap-8 md:flex-row md:items-start items-center">
                                    <Thumbs product={product} />
                                    <Description product={product} />
                                    <Checkout product={product} />
                                </div>
                            )} 
                        {/* </div> */}
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
