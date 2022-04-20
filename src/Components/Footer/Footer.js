import './Footer.css'
import SocialItem from "../../Atoms/SocialItem/SocialItem"
import Logofooter from '../../img/logo.png'

function Footer() {

    return (
        <div className="footerContainer">
            <div className='ftrContent'>
                <div className='contactContainer'>
                    <h1>Electónica. Novedad. Rapidez.</h1>
                    <p className='textContact'>Geek Factory es una empresa comercializadora de partes electrónicas cuya principal misión es acercar las tecnologías más innovadoras al público hispanohablante.</p>
                    <button type='button'>Contact me</button>
                </div>
                <div className='DividerFooter'></div>
                <div className='socialBar'>
                    <img className='imgLogo' src={Logofooter} alt='text 1'></img>
                    <h5 className='copyright'>© 2022 Abstrategic Media. All Rights Reserved. </h5>
                    <SocialItem/>
                </div>
            </div>
        </div>
    );
}
export default Footer;