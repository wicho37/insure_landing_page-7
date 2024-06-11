import style from "./Header.module.css" 
import logo from "../../assets/logo.svg"


const Tittle = () => {
    
    return(
        <div className={style.container}>
            <div className={style.svg}>
               <a href="#"><img src={logo} alt="logo pagina" /></a>
            </div>
            <nav className={style.navbar}>
                <ul className={style.list}>
                    <a href="#" className={style.item}><li>how </li></a>
                    <a href="#" className={style.item}><li>we work</li></a>
                    <a href="#" className={style.item}><li>block</li></a>
                    <a href="#" className={style.item}><li>account</li></a>
                    <button>
                         view plans
                    </button>
                </ul>
            </nav>
            <div className="nav_toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Tittle