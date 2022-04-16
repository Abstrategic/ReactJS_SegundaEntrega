import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../asyncmock';
import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection, query, where, limit } from 'firebase/firestore' 

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    

    useEffect(()  => {
        // if (categoryId) {
        //     getProductsByCategory(categoryId).then(items =>{
        //         setProducts(items)
        //     }).catch(err =>{
        //         console.log(err)
        //     })
            
        // } else {
        //     getProducts().then( response =>{
        //         setProducts(response);
        //     }) 
        // }
        const collectionRef = categoryId
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId), limit(10))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(querySnapshot => {
            console.log(querySnapshot.size)
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products) })

        return (() => {
            setProducts([])
        })          

    },[categoryId])


    console.log(products)
    return (
        
        <div className ="containerItemlist">
            <h1>{categoryId}</h1>
            <ItemList products ={products}/>

        </div>  
    )
    }
    export default ItemListContainer;