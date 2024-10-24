import './Welcome.css';
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div>
            <Header />

            <h1>Inicio de sesión</h1>
            <li><Link to="/form">Registrarse</Link></li>

            <Footer />
        </div>
    )
}

export default Welcome