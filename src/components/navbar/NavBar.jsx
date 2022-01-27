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
                    <li><Link to={'/products'}>Productos</Link></li>
                    <li><Link to={'/contact'}>Contacto</Link></li>
                    <CartWidget />
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;