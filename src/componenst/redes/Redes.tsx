import logo from "../../assets/logo.svg"
import social1 from "../../assets/icon-facebook.svg"
import social2 from "../../assets/icon-twitter.svg"
import social3 from "../../assets/icon-pinterest.svg"
import social4 from "../../assets/icon-instagram.svg"
import style from "./Redes.module.css"
import patternNav from "../../assets/img_mobil/bg-pattern-footer-mobile.svg"
import patternFooter from "../../assets/img_desktop/bg-pattern-footer-desktop.svg"



const SocialNeuwork = () => {

    return(
        <div className={style.social}>
            <img src={patternNav} alt="" className={style.Nav}/>
            <img src={patternFooter} alt="" className={style.footer}/>
            <div className={style.networks}>
                   <img src={logo} className={style.imgLogo} alt="logo pagina" />
                   
                <div>
                   <a href="#"><img src={social1} alt="" /></a>
                   <a href="#"><img src={social2} alt="" /></a>
                   <a href="#"><img src={social3} alt="" /></a>
                   <a href="#"><img src={social4} alt="" /></a>
                </div>
            </div>
        </div>

    )
}


export default SocialNeuwork