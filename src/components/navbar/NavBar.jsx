import './NavBar.css';
import logo from '../../assets/x.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className='navbar-list'>
            <img className='navbar-img' src={logo} alt='The Boring Store'/>
            <div className='div-menu'>
                <ul>
                    <a href='#'><li>Productos</li></a>
                    <a href='#'><li>Ofertas</li></a>
                    <a href='#'><li>Contacto</li></a>
                    <CartWidget />
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;