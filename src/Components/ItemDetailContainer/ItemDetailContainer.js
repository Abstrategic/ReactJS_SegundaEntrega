import { useState, useEffect } from "react";
// import { getProductById } from "../../asyncmock";
import ItemDetail from "../../Atoms/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'



const ItemDetailContainer = ({addToCart, cart}) => {

    const [ products, setProduct] = useState([])
    const {id} = useParams()

    console.log(products)

    useEffect(() => {
        // getProductById(id).then(prod => {
        //     setProduct(prod)
        // })

        // const collectionRef = categoryId
        // ? query(collection(firestoreDb, 'products')), where ('category', '==')

        // getDocs(collectionRef).then(querySnapshot => {
        //     const products = querySnapshot.doc.map( doc=> {
        //         return {id: doc.id, ...doc.data() }
        //     })
        //     setProduct(products)
        // })
        const docRef = doc(firestoreDb, 'products', id)

        getDoc(docRef).then(querySnapshot => {
            const product = { id: querySnapshot.id, ...querySnapshot.data() }
            setProduct(product)
        })


    },[id])
    
    
    return (
        
        <div className ="ItemDetailContainer">
            <ItemDetail {...products} addToCart={addToCart} cart={cart}> </ItemDetail>
        </div>  
    )
    }
    export default ItemDetailContainer