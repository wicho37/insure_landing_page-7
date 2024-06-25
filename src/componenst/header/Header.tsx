import style from "./Header.module.css" 
import logo from "../../assets/logo.svg"
import { useState } from "react"




const Tittle = () => {
    const [isOpen, setIsOpen] = useState(true)

    const ToggleMenu = () => {
        setIsOpen(!isOpen);
       console.log(isOpen)
    } 
     
    return(
        <div className={style.navbar}>

            <div className={style.nav_logo}><a href="#"><img src={logo} alt="logo pagina" /></a></div>

            <div className={style.nav_items } >
                <a href="#">how we work</a>
                <a href="#">block</a>
                <a href="#">account</a>
                <button className={style.boton}>view plans</button>   
            </div>
            
            <div className={style.nav_toggle} onClick={ToggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Tittle