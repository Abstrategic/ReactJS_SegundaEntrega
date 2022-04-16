import './FunctionCounter.css'
import { useState } from "react";

function FunctionCounter({ initial, stock, onAdd }) {

    const [count, setCount] = useState(initial);

    const increment = () => {
        setCount(count < stock ? count + 1 : stock);
    };
    const decrement = () => {
        setCount(count >= 1 ? count - 1 : 0);
    };


    return (
        <div className="counter-item">
            <div className='counterContainer'>
                <button className="button-32" onClick={decrement}>-</button>
                <p className="valueCounter">{count}</p>
                <button className="button-32" onClick={increment}>+</button>
            </div>
            <div className='addCart'>
                <p className="cartLink" onClick= {() => onAdd(count)}>Agregar al carrito</p>
            </div>
        </div>

    );

}
    export default FunctionCounter;