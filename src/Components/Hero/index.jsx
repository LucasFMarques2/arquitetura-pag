import { Link } from 'react-router-dom'
import {Button} from '../Button'
import './style.css'

export function Hero(){
    return(
        <div className="hero d-flex al-center">
            <div className="hero-text">
                <h1>Let Your Be Unique</h1>
                <p>There are manu variations of the passagens of lorem ipsum frombavailable, majority</p>
                <Link to='/about'>
                     <Button buttonStyle="secundary" arrow>Get Started</Button>
                </Link>
            </div>
        </div>
    )
}