import './SocialItem.css';
import fb from "../../img/fb.png";
import tw from "../../img/tw.png";
import ig from "../../img/in.png";


function SocialItem() {
    
    return (
        <div className='socialBox'>
            <div className="SocialContainer">
            <img className='socialFB' src = {fb} alt="logo facebook media"></img>
            </div>
            <div className="SocialContainer">
            <img src = {tw} alt="logo Social media" className='socialTW'></img>
            </div>
            <div className="SocialContainer">
            <img src = {ig} alt="logo instagram media" className='socialLD' id='linkedin'></img>
            </div>

        </div>
        
    );
}
export default SocialItem;