import './NavBar.css';
import logo from '../../assets/x.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar-list'>
            <Link to={'/'}><img className='navbar-img' src={logo} alt='The Boring Store'/></Link>
            <div className='div-menu'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/category/clothes'}>Ropa</Link></li>
                    <li><Link to={'/category/accessories'}>Accesorios</Link></li>
                    <Link to={'/cart'}><CartWidget /></Link>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;