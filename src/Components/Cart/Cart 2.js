import { useContext } from "react"
import CartContext from "../../context/CartContext"
import './Cart.css'
import CloseIcon from '../../img/close.png'
import EmptyImg from '../../img/Empty.png'
import { NavLink } from 'react-router-dom'
import { addDoc, collection, firestore, updateDoc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import {firestoreDb} from '../../services/firebase'




const Cart = () => {

    const {cart, clearCart, removeItem, totalAmount} = useContext(CartContext)
    console.log(cart)
    const AmountCart = totalAmount()
    const createOrder = () =>{

        const objOrdder = {
            buyer: {
                name : 'Jose Luis',
                phone: '3763736373',
                email: 'joseluis@gmail.com'
            },
            items : cart,
            total : totalAmount()
        }
        // const batch = writeBatch(firestoreDb)
        // const outOfStock = []

        // const ids = cart.map(prod => prod.id)
        // const collectionRef = collection (firestoreDb, 'products')
        
        // getDocs(query(collectionRef, where(documentId(), 'in', ids))
        // .then(response=>{

        //     response.doc.forEach ( doc =>{
        //         const dataDoc = doc.data()
        //         const prodQuantity = objOrdder.items.find(prod => prod.id === doc.id).quantity
        //         if(dataDoc.stock >= prodQuantity){
        //             batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
        //         } else{
        //             outOfStock.push({ id: doc.id, dataDoc})
        //         }
        //     })
        // }).then ( ()=>{
        //     if(outOfStock.length === 0 ){
        //         const collectionRef = collection ( firestoreDb, 'orders')
        //         addDoc(collectionRef, objOrdder)
        //     } else {
        //         return Promise.reject({ name : 'outOfStockError', products: 'outOfStock'})
        //     }
        // }).then(()=> {
        //     batch.commit()
        // }).catch((error)=>{
        //     if(error && error.name === 'outOfStockError' && error.products.length >0) {
        //         console.log(error.products)
        //     } else {
        //         console.log(error)
        //     }
        // })
        
    }

    
    

    if(cart.length === 0) {
        return (
        <div className="emptyContainer">
            <img className="imgEmpty" src={EmptyImg} alt='Empty image'></img>
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
                
            </div>
            <div className="breakdwnCart">
                    <h2 className="titleBrk">Desglose de la compra</h2>
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
                    <button className="btn">Pagar ahora</button>
                    
            </div>

            </div>
            
            

        </div>
        
    )
}

export default Cart
// onClick={createOrder}