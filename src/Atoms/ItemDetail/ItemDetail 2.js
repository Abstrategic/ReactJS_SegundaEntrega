import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import FunctionCounter from "../FunctionCounter/FunctionCounter";
import './ItemDetail.css'
import CartContext from '../../context/CartContext'


const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const [quantity, setQuantity]= useState(0)

    const {addItem} = useContext(CartContext)

    
    
    const handleOnAdd = (count) =>{
        console.log("agregue al carrito")
        setQuantity(count)
        addItem({id, name, price, img, stock}, count)
        
    }

    return (
        
        <div className ="ItemDetail">
            <div className="headerItem">
                <img className="itemImg" src={img} alt="PicProduct"/>
                <div className="descContainer">
                        <div className="titleContent">
                            <h3 className="itemTitle">{name}</h3>
                            <p className="ItemCategory">{category}</p>
                        </div>
                        <p className="shortItem">{description}</p>
                        <p className="prcItm">{price} € </p>
                        { quantity === 0 ? <FunctionCounter initial={0} stock={stock} onAdd={handleOnAdd} /> : <Link to='/cart'>Ir al carrito</Link>}
                </div>
            </div>
            <div className="Divider"></div>
            <div className="desContainer">
                <h3 className="descTitle">Description</h3>
                <p className="longDesc">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est 
                laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
                placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et 
                voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente 
                delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                repellat."</p>
            </div>
        </div>  
    )
}
    export default ItemDetail;