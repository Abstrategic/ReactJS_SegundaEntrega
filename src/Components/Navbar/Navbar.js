import Cartwidget from "../../Atoms/Cartwidget/Cartwidget";
import Userlogin from "../../Atoms/Userlogin/Userlogin";
import Logo from "../../img/logo.png"
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import {useState, useEffect } from 'react'
import '../../Atoms/Navlist/Navlist.css'
import { getCategories } from '../../services/firebase/firestore'



const Navbar = () => {

    const [categories, setCategories] = useState([])

    // const { getQuantity } = useContext(CartContext)

    useEffect(() => {
        getCategories().then(categories => {
            
            setCategories(categories)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <nav className="Navbar">
            <Link to='/'>
                <img className="logo" src={Logo} alt="Logo Abstrategic"></img>
            </Link>
            <div className="container-nav">
                <div className="Categories">
                    {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) => isActive ? 'navlistActive' : 'navlist'}>{cat.description}</NavLink>)}
                </div>
                <NavLink to='/cart' className={({isActive}) => isActive ? 'navlistActive' : 'navlist' }>
                    <Cartwidget number="1"/>
                </NavLink>
                <Userlogin cta ="Login"/>
            </div>
        </nav>
    );
}

export default Navbar;