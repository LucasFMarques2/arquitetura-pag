import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/dnc-logo 2.svg'

import './style.css'

export function Header(){
    const location = useLocation();
    return(
        <header>
            <img src={logo} alt="logo DNC" />
            <section>
                <Link to='/'  className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>Sobre nós</Link>
                <Link to='/projects' className={location.pathname === '/projects' ? 'active' : ''}>Projetos</Link>
                <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            </section>
        </header>
    )
}