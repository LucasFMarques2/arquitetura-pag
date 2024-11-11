import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { ProjectList } from "../../Components/ProjectList"
import {Banner} from '../../Components/Banner'

export function Project(){
    return(
        <>
            <Header/>
            <Banner title='Projects' image='Banner.jpg'/>
            <div className="container">
                <ProjectList/>
            </div>
            <Footer/>
        </>
    )
}