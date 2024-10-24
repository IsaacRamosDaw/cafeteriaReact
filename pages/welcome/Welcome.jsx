import './Welcome.css';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div>
            <h1>Inicio de sesión</h1>
            <button className='login-confirmed'><Link to="/home">Confirmar</Link></button>
            <li><Link to="/form">Registrarse</Link></li>
        </div>
    )
}

export default Welcome