import { Link } from 'react-router-dom';
import './SearchBar.scss';

function SearchBar() {
    return (
        <div className='header-container'>
            <div className='search-container'>
                <input placeholder='Type to search...' />
                <ul>
                    <li><Link to="/account">Account</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default SearchBar