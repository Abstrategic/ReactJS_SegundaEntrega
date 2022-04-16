import Cartwidget from "../../Atoms/Cartwidget/Cartwidget";
import Userlogin from "../../Atoms/Userlogin/Userlogin";
import Logo from "../../img/logo.png"
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import '../../Atoms/Navlist/Navlist.css'



function Navbar() {
    return (
        <nav className="Navbar">
            <Link to='/'>
                <img className="logo" src={Logo} alt="Logo Abstrategic"></img>
            </Link>
            <div className="container-nav">
                <div className="Categories">
                    <NavLink to='/category/Moviles' className={({isActive}) => isActive ? 'navlistActive' : 'navlist' }>Moviles</NavLink>
                    <NavLink to='/category/Ordenadores' className={({isActive}) => isActive ? 'navlistActive' : 'navlist' }>Ordenadores</NavLink>
                    <NavLink to='/category/Consolas' className={({isActive}) => isActive ? 'navlistActive' : 'navlist' }>Consolas</NavLink>
                    <NavLink to='/category/Perifericos' className={({isActive}) => isActive ? 'navlistActive' : 'navlist' }>Perifericos</NavLink>
                </div>
                <Cartwidget number="1"/>
                <Userlogin cta ="Login"/>
            </div>
        </nav>
    );
}
export default Navbar;