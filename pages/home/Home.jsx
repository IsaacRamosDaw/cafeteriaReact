import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Offers from "../../src/components/offers/Offers";
import './Home.css';

function Home(){
    return(
        <div className="home-container">
            <Header />
            <h1>Página de inicio</h1>
            <Offers />
            <Footer />
        </div>
    )
}

export default Home;