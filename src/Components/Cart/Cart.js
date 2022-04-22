import { useContext, useReducer, useState } from "react"
import { NavLink } from 'react-router-dom'
import { createOrderAndUpdateStock } from "../../services/firebase/firestore"
import CloseIcon from '../../img/close.png'
import EmptyImg from '../../img/Empty.png'
import Successimg from '../../img/success.png'
import Formlist from "../../Atoms/Formlist/Formlist"
import CartContext from "../../context/CartContext"
import './Cart.css'

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

const Cart = () => {

    const {cart, clearCart, removeItem, totalAmount} = useContext(CartContext)
    const [formData, setFormData] = useReducer(formReducer, {})
    const [submitting, setSubmitting] = useState(false);
    const [successfull, setSuccessfull] = useState(false)
    const [orderID, setOrderID] = useState()
    const AmountCart = totalAmount()
    
    const createOrder = () =>{

        const objOrder = {
            buyer : formData,
            items : cart,
            total : totalAmount()
        }

        createOrderAndUpdateStock(cart, objOrder).then(id => {
            clearCart()
            setSuccessfull(true)
            setOrderID(id)
            
        }).catch((error) => {
            if(error && error.name === 'outOfStockError' && error.products.length > 0) {
                console.log(error)
            }
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
        setSubmitting(true);
    }

    const handleChange = event =>{

        setFormData({
            name: event.target.name,
            value: event.target.value
        })
    }

    if(successfull === true) {

        return (
        <div className="successContainer">
            <img className="imgEmpty" src={Successimg} alt='ilustracion sucessfull'></img>
            <p className="titlEmpt">Your order was sucessfully sended</p>
            <p className="bd">We have just sent your online invoice to the email address <b>{formData.email}</b></p>
            <p className="stSuccess">Order Details</p>
            <div className="ordDetCont">
                <p className="bdSuccs">Order ID :  <b>{orderID}</b></p>
                <p className="bdSuccs">Name :  <b>{formData.name}</b></p>
                <p className="bdSuccs">Address :  <b>{formData.address}</b></p>
            </div>
            
            <NavLink to='/' className="directionLink">Back to home</NavLink>
        </div>
        )
    }

    if(cart.length === 0) {
        return (
        <div className="emptyContainer">
            <img className="imgEmpty" src={EmptyImg} alt='carrito vacio'></img>
            <p className="titlEmpt">Your cart is empty</p>
            <p className="bdEmpty">Looks like you have not added anything to you cart. Go ahead and Explore some item</p>
            <NavLink to='/' className="directionLink">Find new articles</NavLink>
        </div>
        )
    }

    return(
        
        <div className="cartContainer">
            <h1 className="titlSect">Carrito de compra</h1>
            <div className="CartContainer">
            <div className="artSide">
                <h2 className="subtlt">Listado de articulos</h2>
                <ul>
                        {cart.map(prod => 
                        <li className="cartItemcard" key={prod.id}>
                            <img className="crtItmImg" src={prod.img} alt="foto time"></img>
                            <div className="componentContainer">
                                <h4 className="crtTitle">{prod.name}</h4>
                                <div className='quantContainer'>
                                    <p className="quantLabel">Quantity</p>
                                    <p className="quantItm">{prod.quantity}</p>
                                </div>
                                <div className="quantContainer">
                                    <p className="priceLabel">Price per unit</p>
                                    <p className="priceItm">{prod.price}</p>
                                </div>
                                <img src={CloseIcon} alt="EraseItem icon" className="closeIcon" onClick={() => removeItem(prod.id)} />
                                
                            </div>
                        </li>
                        )}
                </ul>
                <div className="cleanContainer">
                    <p className="directionLink" onClick={clearCart}>Clear Cart</p>
                </div>
                <div className="formDelivery">
                    <h2 className="subtlt">Direccion de envio</h2>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="formContainer" disabled={submitting}>
                            <Formlist label='Numbre' name='name' type='text' evento={handleChange}/>
                            <Formlist label='Telefono' name='phone' type='phone' evento={handleChange}/>
                            <Formlist label='Email' name='email' type='email' evento={handleChange}/>
                            <Formlist label='Direccion de entrega' name='address' type='text' evento={handleChange}/>
                            <Formlist label='Ciudad' name='city' type='text' evento={handleChange}/>
                            <Formlist label='Codigo Postal' name='zip' type='number' evento={handleChange}/>
                        </fieldset>
                        <button type="submit" className="btn" disabled={submitting}>Submit</button>
                    </form>
                </div>
            </div>
            <div className="breakdwnCart">
                    <h2 className="titleBrk">Desglose de la compra</h2>
                    
                    {submitting &&
                        <div className="contAddress">
                            <h3 className="itmName">Datos de entrega</h3>
                            <p className="itmBi">{formData.name}</p>
                            <p className="itmBi">{formData.address} {formData.zip} {formData.city}</p>
                            <p className="itmBi">{formData.phone}</p>
                            <p className="itmBi">{formData.email}</p>
                            <div className="dvdAd"></div>
                        </div>}
                    
                    {cart.map(prod => 
                    <div className="itemConten"> 
                        <div className="itmBreak">
                            <div className="itmCntr">
                                <p className="itmName">{prod.name}</p>
                                <p className="itmQntt">x{prod.quantity}</p>
                            </div>
                            <p className="itmPrc">{prod.quantity*prod.price}€</p>
                        </div>
                        <div className="dvdBr"></div>
                    </div>
                    )}

                    <p className="itmBi">Base imponible {AmountCart}€</p>
                    <p className="itmBi">Impuesto 21% {AmountCart*0.21}€</p>
                    <p className="itmBi">Total a pagar</p>
                    <p className="fnlPrice">{AmountCart + (AmountCart*0.21)} €</p>
                    {submitting &&
                        <button className="btn" onClick={createOrder}>Pagar ahora</button>
                    }
                    
                    
            </div>
            </div>
        </div>
        
        
    )
}

export default Cart