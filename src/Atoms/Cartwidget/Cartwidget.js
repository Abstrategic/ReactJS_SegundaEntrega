import './Cartwidget.css'
import Cart from '../../img/cart.svg'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const Cartwidget = (props) => {
    const {getQuantity} = useContext(CartContext)

    if ( getQuantity() === 0) {
        return null
    }

    return (
        <>
        <div className="cart-container">
            <img className= "Cartlogo" src={Cart} alt="logoAbstrategic"></img>
            <p className="bulletCart">{getQuantity()}</p>
        </div></>
    )
    }
    export default Cartwidget;