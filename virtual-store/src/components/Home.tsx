import styles from './Home.module.css'
import Header from './Header'
import Hero from './Hero'
import ProductCard from './ProductCard'
import Footer from './Footer'
// import products from '../assets/products.js'
import { OnSaleSlide } from './OnSale.js'
import Product from '../interfaces/Product.js'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Home() {

    const [products,setProducts] = useState<Product[]>([]);

    const text = useSelector(store => store.products.text);
    useEffect(() => {
        axios.get("/products.json")
            .then((response) => {
                const filterData = response.data.filter(each => each.title.toLowerCase().includes(text.toLowerCase()));
                setProducts(filterData);

            })
            .catch((error) => console.log(error))
    }, [text]);
    console.log(text);

    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(8);

    const totalPages = Math.ceil(products.length / 8);// calcular total de paginas

    const handlePageClick = (pageNumber) => {
        const newFrom = (pageNumber - 1) * 8;
        const newTo = newFrom + 8;
        setFrom(newFrom);
        setTo(newTo);
    }
    const visibleProducts = products.slice(from, to);

    

    return (
        <>
            <Header></Header>
            <Hero first={"Tecnologia"} second={"Renovada"}></Hero>    
            <main>
                <div className={styles["container"]}>
                    <div className={styles["product-container"]} id="products">
                        {visibleProducts.map((each : Product) => (
                            <ProductCard
                                key={each.id}
                                id={each.id}
                                title={each.title}
                                price={each.price}
                                color={each.colors[0]}
                                image={each.images[0]}
                            />
                        ))}
                    </div>
                    <div className={styles["slider-controls"]}>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={styles["page-button"]}
                                onClick={() => handlePageClick(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <OnSaleSlide></OnSaleSlide>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Home