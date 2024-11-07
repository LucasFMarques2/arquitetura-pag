import './style.css'

export function Banner(props){
    return(
        // eslint-disable-next-line react/prop-types
        <div className='banner d-flex al-end' style={{ backgroundImage: `url(/${props.image})`}}>
            <div className="container">
                <div className="title-panel d-flex al-center jc-center">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    )
}