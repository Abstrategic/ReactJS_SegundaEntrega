import { useState, useEffect } from "react";
import { getProductById } from "../../services/firebase/firestore"; 
import ItemDetail from "../../Atoms/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({addToCart, cart}) => {

    const [ products, setProduct] = useState([])
    const {id} = useParams()

    useEffect(() => {

        getProductById(id).then(prod => {
            setProduct(prod)
        }).catch(error => {
            console.log(error)
        })
    },[id])
    
    return (
        
        <div className ="ItemDetailContainer">
            <ItemDetail {...products} addToCart={addToCart} cart={cart}> </ItemDetail>
        </div>  
    )}
    export default ItemDetailContainer