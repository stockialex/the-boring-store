import './NavBar.css';
import logo from '../../assets/x.png';

const NavBar = () => {
    return (
        <nav className='navbar-list'>
            <img className='navbar-img' src={logo} alt='The Boring Store'/>
            <ul>
                <a href='#'><li>Productos</li></a>
                <a href='#'><li>Ofertas</li></a>
                <a href='#'><li>Contacto</li></a>
            </ul>
        </nav>
    );
}
 
export default NavBar;