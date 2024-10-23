import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <h2>Iconos del footer</h2>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/orders">Orders</Link></li>
            </ul>
        </div>
    )
}

export default Footer