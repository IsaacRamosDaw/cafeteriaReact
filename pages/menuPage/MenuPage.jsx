import Menu from '../../src/components/menu/Menu';
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';

function MenuPage(){
    return(
        <div className='menu-page-container'>
            <Header />
            <h1>Página del menú</h1>
            <Menu />
            <Footer />
        </div>
    )
}

export default MenuPage