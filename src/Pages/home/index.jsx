import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { Button } from "../../Components/Button"
import { Banner } from "../../Components/Banner"


export function Home(){
    return(
        <>
            <Header/>
            <h1>home</h1>
            <Button buttonStyle="secundary" arrow>Olá</Button>
            <Banner title='home' image='Banner.jpg'/>
            <Footer/>
        </>
    )
}