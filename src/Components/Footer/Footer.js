import './Footer.css'
import SocialItem from "../../Atoms/SocialItem/SocialItem"

function Footer() {

    return (
        <div className="footerContainer">
            <div className='ftrContent'>
                <div className='contactContainer'>
                    <h1>Seasoned. Nimble. Remote.</h1>
                    <p className='textContact'>We’re a diverse and passionate team that takes ownership of your design and empower you to execute the roadmap. We stay light on our feet and truly enjoy delivering great work.</p>
                    <button type='button'>Contact me</button>
                </div>
                <div className='DividerFooter'></div>
                <div className='socialBar'>
                    <img src='image.jpg' alt='text 1'></img>
                    <h5>© 2022 Abstrategic Media. All Rights Reserved. </h5>
                    <SocialItem/>
                </div>
            </div>
        </div>
    );
}
export default Footer;