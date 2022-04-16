import './Item.css'
import Userlogin from '../Userlogin/Userlogin';
import { Link } from 'react-router-dom';

const Item = ({productName, description, imgUrl, id}) => (
    <div className='item-shop'>
        <img className="img-item" src={imgUrl} alt="Italian Trulli" />
        <h2>{productName}</h2>
        <p className="content-item">{description}</p>
        <Link to={`/item/${id}`}>
            <Userlogin cta ="Read More"/>
        </Link>
        
    </div>
)
    export default Item;