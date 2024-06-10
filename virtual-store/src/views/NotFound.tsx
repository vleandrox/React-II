import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function NotFound() {
    return (<>
        <Header></Header>
        <Hero first={404} second={"NotFound"}></Hero>
        <Footer></Footer>
    </>)
}

export default NotFound