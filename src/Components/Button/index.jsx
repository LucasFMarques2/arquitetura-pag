import './style.css'
import whiteArrow from '../../assets/white-arrow.svg'

// eslint-disable-next-line react/prop-types
export function Button({arrow, buttonStyle, loading, children, ...props}){
    return(
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={whiteArrow}/>}
        </button>
    )
}