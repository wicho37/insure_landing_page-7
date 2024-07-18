import style from "./Seccion-4.module.css"
import imgWeWork from "../../assets/img_mobil/bg-pattern-how-we-work-mobile.svg"



const Nostros = () => {

    return(
        <div className={style.nosotros}>
            <img src={imgWeWork} className={style.imgHoWe}/>
            <p className={style.parrafo}>Find out more about how we work</p>
            <button className={style.boton3}>HOW WE WORK</button>
           
        </div>
    )
}


export default Nostros