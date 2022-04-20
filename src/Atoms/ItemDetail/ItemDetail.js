import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import FunctionCounter from "../FunctionCounter/FunctionCounter";
import './ItemDetail.css'
import CartContext from '../../context/CartContext'


const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const [quantity, setQuantity]= useState(0)
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (count) =>{
        
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
                        { quantity === 0 ? <FunctionCounter initial={0} stock={stock} onAdd={handleOnAdd} /> : <Link to='/cart'><p className="cartLink">Ir al carrito</p></Link>}
                </div>
            </div>
            <div className="Divider"></div>
            <div className="desContainer">
                <h3 className="descTitle">Description</h3>
                <p className="longDesc">CHUWI Herobook Air cuenta con un cuerpo de plástico respetuoso con el medio ambiente y un diseño ligero. el cuerpo plateado Aurora de 17mm de espesor añade encanto.solo pesa 910g, que parece un libro o una revista, se puede meterlo fácilmente en su mochila o cartera
                Mini Laptop lleva con una pantalla HD de 11,6 pulgadas, con resolucion de 1366x768p,178° ángulo de visión amplio, 16: 10 relación de visualización, tecnología de protección ocular, le brinda máxima comodidad de vision, mayor atención, mayor eficiencia para las tareas
                CHUWI portatil equipado con CPU Intel Celeron N4020, Dual-core Dual-thread desde 1.1Ghz hasta 2.8Ghz. cache de 4MB, soporta multitarea y bajo consumo de energía, alta eficiencia computacional, sin ventilador, sin ruido, excelente mecanismo de disipación de calor
                Ordenador Portátil cuenta con 128GB SSD + 4GB RAM, en comparación con la tecnología emmc, la velocidad de almacenamiento aumentó cuatro veces. lleva una ranura de expansión de Micro SD hasta 128GB, una M.2 que soporta hasta 1TB de extensión de SSD
                CHUWI mini UltraBook equipado con Windows 10 preinstalado, una batería de 34,2Wh, se puede soporta durar max hasta 9H, puede cooperar en el estudio y la aplicación de trabajo durante todo el día, lleva multi-interfaces como: USB 2.0, USB3.0, Mini HD, M.2, etc...
                </p>
            </div>
        </div>  
    )
}
    export default ItemDetail;