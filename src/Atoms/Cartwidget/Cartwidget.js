import './Cartwidget.css'
import Cart from '../../img/cart.svg'

const Cartwidget = (props) => {
    return (
        <>
        <div class="cart-container">
            <img class= "Cartlogo" src={Cart} alt="logoAbstrategic"></img>
            <p class="bulletCart">{props.number}</p>
        </div></>
    )
    }
    export default Cartwidget;