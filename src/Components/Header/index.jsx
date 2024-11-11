import { Link, useLocation } from 'react-router-dom'
import {Button} from '../Button'
import logo from '../../assets/dnc-logo 2.svg'
import { useState } from 'react'

import './style.css'

export function Header(){
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <header>
           <div className="container">
            <div className="al-center d-flex jc-space-between">
                 <Link to="/"><img src={logo} alt="img" /></Link>
                 <div className="mobile-menu">
                    <Button buttonStyle='secundary' onClick={toggleMenu}> 
                        menu
                    </Button>
                 </div>
                    <nav className={`${ isOpen ? 'open' : ''}`}>
                    <Button buttonStyle='unstyled' className='Mobile-menu close-btn' onClick={toggleMenu}> 
                        X
                    </Button>
                        <ul className='d-flex'>
                            <li><Link to='/'  className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                            <li><Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>Sobre nós</Link></li>
                            <li><Link to='/projects' className={location.pathname === '/projects' ? 'active' : ''}>Projetos</Link></li>
                            <li><Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                        </ul>
                    </nav>
            </div>
           </div>
        </header>
    )
}