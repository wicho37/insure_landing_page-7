import style from "./Header.module.css" 
import logo from "../../assets/logo.svg"




const Tittle = () => {
 /*    const [isOpen, setIsOpen] = useState(false) 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
     */
    return(
        <div className={style.navbar}>

            <div className={style.nav_logo}><a href="#"><img src={logo} alt="logo pagina" /></a></div>

            <div className={style.nav_items}>
                <a href="#">how</a>
                <a href="#">we work</a>
                <a href="#">block</a>
                <a href="#">account</a>
                <button>view plans</button>   
            </div>
            
            <div className={style.nav_toggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Tittle