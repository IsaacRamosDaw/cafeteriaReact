import { Link } from 'react-router-dom'
import './TabsBar.css'

function TabsBar() {
    return (
        <div className="footer-container">
            <ul className='icons-container'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/orders">Orders</Link></li>
            </ul>
        </div>
    )
}

export default TabsBar