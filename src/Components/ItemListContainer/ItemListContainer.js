import ItemList from '../ItemList/ItemList';
// import { getProducts, getProductsByCategory } from '../../asyncmock';
import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore'; 

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    

    useEffect(()  => {

        // if (categoryId) {
            getProducts(categoryId).then(items =>{
                setProducts(items)
            }).catch(err =>{
                console.log(err)
            })

        return (() => {
            setProducts([])
        })          

    }, [categoryId])


    console.log(products)
    return (
        
        <div className ="containerItemlist">
            <h1>{categoryId}</h1>
            <ItemList products ={products}/>

        </div>  
    )
    }
    export default ItemListContainer;