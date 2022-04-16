import './ItemCart.css'


const ItemCart = (name) => {
    
    return (
        <div className="ItemCart">
            <img src="imagen.jpg" alt="foto time"></img>
            <h1>{name}</h1>
            <p>quantity</p>
            <p>price</p>
            <button type="button">Eliminar product</button>
        </div>
        
    )
    }
    export default ItemCart;