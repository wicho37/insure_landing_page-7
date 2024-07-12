import intro from "../../assets/img_mobil/intro-mobile.jpg"
import style from "./Seccion1.module.css"
import introRigth from "../../assets/img_mobil/bg-pattern-intro-right-mobile.svg"


const Seguro = () => {
     return(
        <div>
           <div>
              <img src={intro} />
           </div>
           <div className={style.cobertura}>
              <h2>Humanizing your insurance.</h2>
              <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
              <button className={style.boton2}>view plans</button>
              <img src={introRigth} />
           </div>

        </div>
     )
}


export default Seguro