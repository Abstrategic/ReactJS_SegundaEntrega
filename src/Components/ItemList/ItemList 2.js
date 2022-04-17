import Item from '../../Atoms/Item/Item';
import './ItemList.css'

const ItemList = ({products}) => {

    return (
        <div className='item-list'>
            <ul className='listContainer'>
                {products.map(products => <Item className="cardCta" key={products.id} productName={products.name} description={products.description} imgUrl={products.img} id={products.id} />)}
            </ul>
        </div>
    )
    }
    export default ItemList;