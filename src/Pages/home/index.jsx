import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { Button } from "../../Components/Button"

export function Home(){
    return(
        <>
            <Header/>
            <h1>home</h1>
            <Button buttonStyle="secundary" arrow>Olá</Button>
            <Footer/>
        </>
    )
}