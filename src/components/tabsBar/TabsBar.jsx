import { Link } from 'react-router-dom'
import './TabsBar.scss'

function TabsBar() {
    return (
        <div className="footer-container">
            <ul className='icons-container'>
                <li><Link to="/home"><img src="/images/icons/home.svg" alt="Home" />Home</Link></li>
                <li><Link to="/menu"><img src="/images/icons/menu.svg" alt="Menu" />Menu</Link></li>
                <li><Link to="/orders"><img src="/images/icons/orders.svg" alt="Orders" />Orders</Link></li>
            </ul>
        </div>
    )
}

export default TabsBar