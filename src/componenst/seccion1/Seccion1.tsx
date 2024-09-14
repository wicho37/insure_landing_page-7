import intro from "../../assets/img_mobil/intro-mobile.jpg"
import style from "./Seccion1.module.css"
import introRigth from "../../assets/img_mobil/bg-pattern-intro-right-mobile.svg"
import introLeft from "../../assets/img_mobil/bg-pattern-intro-left-mobile.svg"
import introLeftDesk from "../../assets/img_desktop/bg-pattern-intro-left-desktop.svg"
import {useState} from "react"
import ImgIRD from "../img_i_r_d/ImgIRD"


const Seguro = () => {
   const [formBoton, setFormBoton] = useState (false)

   const pushBoton = () => {
        setFormBoton(!formBoton)
        console.log(formBoton)
   }
   
     return(
         <div className={style.cobertura}>
             <ImgIRD />
            <div>
               <img src={introLeft} alt="" className={style.introLeft1}/>
               <img src={introRigth} className={style.introRigth1}/>
               <img src={intro} className={style.imgPpal}/> 
            </div>
            <div>
               <img src={introLeftDesk} alt="" className={style.introLeftDesktop}/> 
            </div>
            <div className={style.contentText}>
               <span className={style.boton3}></span>
               <h2>Humanizing your insurance.</h2>
               <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
               <button className={style.boton2} onClick={pushBoton}>view plans</button>
            </div>
         </div>
     )
}


export default Seguro