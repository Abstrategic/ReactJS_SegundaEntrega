import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [ cart, setCart] = useState([])
    console.log(cart)

    const addItem = (product, quantity) => {

        // const objItemCart = {...product, quantity}
        // setCart([...cart, objItemCart])

        let repetido=false;
        cart.map((prod) => {
            if(prod.id===product.id){
                prod.quantity = prod.quantity + quantity;
                console.log(prod.quantity)
                
                if (prod.quantity >= product.stock){
                    prod.quantity = product.stock;
                    alert('El producto que acabas de seleccionar supera el Stock disponible.Se ha modificado el numero de items con el Stock disponible este momento')
                }
                repetido=true;
                setCart([...cart])
            }
        })
        if (repetido === false) {
            const objItemCart = {...product,quantity}
            setCart([...cart, objItemCart])
        }
    }


    const clearCart = () => {
        setCart([])

    }

    const removeItem = (id) => {
        

        const AuxCart = cart.filter((removeItemId) => removeItemId.id !== id);
        setCart(AuxCart);
    }
    
    const isInCart = (id) =>{

        return cart.some(p => p.id === id)
    }


    const getQuantity = () => {
        let count = 0
        cart.forEach( prod => {
            count = count + prod.quantity
        })

        return count
    }
    const totalAmount = () => {
        return cart.reduce((suma, i) => suma + i.quantity * i.price, 0);
    };
    
    const totalItem = ()=>{
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity
        });
        return total
    }

    // const totalItem = ()=>{
    //     let total = 0
    //     cart.forEach(prod => {
    //         prod.price * prod.quantity
    //     });
    //     return total
    // }
    

    return(
        <Context.Provider value={{cart, addItem, clearCart, getQuantity,removeItem,isInCart,totalAmount,totalItem}}>
            {children}
        </Context.Provider>
    )
}

export default Context