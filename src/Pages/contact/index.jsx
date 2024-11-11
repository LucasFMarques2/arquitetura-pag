import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import {Banner} from '../../Components/Banner'
import { ContactForm } from "../../Components/ContactForm"

export function Contact(){
    return(
        <>
           <Header/>
           <Banner title='Contact' image='Banner.jpg'/>
            <div className="container">
                <ContactForm/>
            </div>
            <Footer/>
        </>
    )
}