/* import style from "./Header.module.css" 
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

            <div className={style.nav_items} >
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

export default Tittle */




import {useState} from "react";
import styles from "./Header.module.css"
import logo from "../../assets/logo.svg"



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const ToggleMenu = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.nav_logo}><img src={logo}></img></div>
            <div className={`${styles.nav_items} ${isOpen && styles.open}`}> 
                <a href="">how we work</a>
                <a href="">blog</a>
                <a href="">account</a>
                <button>view plans</button>
            </div>
            <div className= {`${styles.nav_toggle} ${isOpen && styles.open}`} onClick={ToggleMenu} >
                <span></span>
                <span></span>
                <span></span>
            </div>
       </div>
    )
}



export default Navbar