import curtir from '../../assets/curtir.png'
import curtido from '../../assets/curtido.png'
import {useState} from 'react'

import './style.css'

export function ProjectList(){
        const [like, setLike] = useState(curtir)

        function handleLike(){
            setLike(like === curtir ? curtido : curtir)
        }
    
    return(
        
        <div className="projects-section">
            <div className="projects-hero">
                <h2>Follow Our Projects</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit expedita architecto officia dolore ex</p>
            </div>
            <div className="projects-grid">
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>GO, Brasil</p>
                    <img src={like} onClick={handleLike}/>
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>GO, Brasil</p>
                    <img src={like} onClick={handleLike}/>
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>GO, Brasil</p>
                    <img src={like} onClick={handleLike}/>
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>GO, Brasil</p>
                    <img src={like} onClick={handleLike}/>
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>GO, Brasil</p>
                    <img src={like} onClick={handleLike}/>
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>GO, Brasil</p>
                    <img src={like} onClick={handleLike}/>
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>GO, Brasil</p>
                    <img src={like} onClick={handleLike}/>
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>GO, Brasil</p>
                    <img src={like} onClick={handleLike}/>
                </div>

                
            </div>
        </div>
    )
}