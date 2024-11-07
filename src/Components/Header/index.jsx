import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/dnc-logo 2.svg'

import './style.css'

export function Header(){
    const location = useLocation();
    return(
        <header>
           <div className="container">
            <div className="al-center d-flex jc-space-between">
                 <Link to="/"><img src={logo} alt="img" /></Link>
                    <nav>
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