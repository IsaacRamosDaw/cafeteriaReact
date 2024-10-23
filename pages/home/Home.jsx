import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";

function Home(){
    return(
        <div className="home-container">
            <Header />
            <h1>Página de inicio</h1>
            <Footer />
        </div>
    )
}

export default Home;