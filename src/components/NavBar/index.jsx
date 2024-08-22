import logo from '../../assets/images/logo.webp';
import ItemList from '../ItemList';
import CartWidget from '../CartWitdget/index';

const NavBar = () => {

    return (
        <header className="header">
        <nav className="navbar">
            <figure className="navbar-logo">
            <img src= {logo} alt=" "/>
            </figure>
            <menu className="navbar-menu">
                <ItemList label = "Productos"/>
                <ItemList label = "Contacto"/>
                <ItemList label = "Registrarse"/> 
                <li> <a href= "" className= "navbar-link"> < CartWidget /> </a>
                </li>
            </menu>
        </nav>
    </header>
    )
};

export default NavBar;