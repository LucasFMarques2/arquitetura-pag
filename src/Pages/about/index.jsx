import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import {Banner} from '../../Components/Banner'
import { AboutText } from "../../Components/AboutText"

export function About(){
    return(
        <>
            <Header/>
            <Banner title='About' image='Banner.jpg'/>
            <div className="container">
                <AboutText/>
            </div>
            <Footer/>
        </>
    )
}