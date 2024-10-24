import SearchBar from "../../src/components/searchBar/SearchBar";
import TabsBar from "../../src/components/tabsBar/tabsBar";
import Offers from "../../src/components/offers/Offers";
import './Home.css';

function Home(){
    return(
        <div className="home-container">
            <SearchBar />
            <h1>Página de inicio</h1>
            <Offers />
            <TabsBar />
        </div>
    )
}

export default Home;