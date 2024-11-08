import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { Hero } from "../../Components/Hero"
import { ProjectList } from "../../Components/ProjectList"

export function Home(){
    return(
        <>
            <Header/>
            <div className="container">
                <Hero/>
                <ProjectList/>
            </div>
            <Footer/>
        </>
    )
}