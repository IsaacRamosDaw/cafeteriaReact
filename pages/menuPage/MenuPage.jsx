import Menu from '../../src/components/menu/Menu';
import SearchBar from '../../src/components/searchBar/SearchBar';
import TabsBar from '../../src/components/tabsBar/tabsBar';
import './MenuPage.scss';

function MenuPage(){
    return(
        <div className='menu-page-container'>
            <SearchBar />
            <h1>Página del menú</h1>
            <Menu />
            <TabsBar />
        </div>
    )
}

export default MenuPage