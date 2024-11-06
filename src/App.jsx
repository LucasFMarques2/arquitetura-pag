import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from './pages/home'
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { Project } from "./pages/projects"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about"  element={<About/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/project"  element={<Project/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
