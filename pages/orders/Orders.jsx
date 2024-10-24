import SearchBar from "../../src/components/searchBar/SearchBar";
import TabsBar from "../../src/components/tabsBar/tabsBar";
import './Orders.scss';
function Orders(){
    return(
        <div>
            <SearchBar />
            <h1>Los pedidos</h1>
            <TabsBar />
        </div>
    )
}

export default Orders