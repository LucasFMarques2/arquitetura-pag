import { Link } from 'react-router-dom'
import logo from '../../assets/dnc-logo 2.svg'
import brasilLogo from '../../assets/brazilLogo.svg'
import usaLogo from '../../assets/usaLogo.svg'
import faceLogo from '../../assets/face.png'
import instaLogo from '../../assets/insta.png'
import linkedLogo from '../../assets/linked.png'
import twtLogo from '../../assets/twt.png'
import './style.css'

export function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between">
                     <div className="footer-logo-col">
                        <img src={logo} alt="logo ndc"className='footer-logo' />
                        <p className='grey-1-color'>A escola que prepara você para as profissões em alta no mercado de trabalho</p>
                            <div className="d-flex social-links">
                                <a href="https://github.com/" target='_blank'>
                                    <img src={faceLogo} alt="" />
                                </a>
                                <a href="https://github.com/" target='_blank'>
                                    <img src={instaLogo} alt="" />
                                </a>
                                <a href="https://github.com/" target='_blank'>
                                    <img src={twtLogo} alt="" />
                                </a>
                                <a href="https://github.com/" target='_blank'>
                                    <img src={linkedLogo} alt="" />
                                </a>
                            </div>
                     </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>Pages</h3>
                            <ul>
                            <li><Link to='/' >Home</Link></li>
                            <li><Link to='/about' >about</Link></li>
                            <li><Link to='/projects' >Projects</Link></li>
                            <li><Link to='/contact' >Contact</Link></li>
                        </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Contact</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 - vila ema</p>
                            <p className="grey-1-color">suporte@mail.com</p>
                            <p className="grey-1-color">suporte@mail.com</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <img src={brasilLogo} alt="img" height='26px'/>
                        <img src={usaLogo} alt="img" height='26px' />
                    </div>
                </div>
            </div>
        </footer>
    )
}