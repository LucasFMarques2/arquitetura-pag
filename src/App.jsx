import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from './Pages/home'
import { About } from "./Pages/about"
import { Contact } from "./Pages/contact"
import { Project } from "./Pages/projects"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about"  element={<About/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/projects"  element={<Project/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
