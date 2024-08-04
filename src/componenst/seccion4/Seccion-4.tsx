import style from "./Seccion-4.module.css"
import imgWeWork from "../../assets/img_mobil/bg-pattern-how-we-work-mobile.svg"
import imgWeWork1 from "../../assets/img_desktop/bg-pattern-how-we-work-desktop.svg"



const Nostros = () => {

    return(
        <div className={style.nosotros}>
            <img src={imgWeWork} className={style.imgHoWe}/>
            {/* <img src={imgWeWork1} alt="" className={style.imgHoWeDesk} /> */}
            <div>
                <p className={style.parrafo}>Find out more about how we work</p>
                <button className={style.boton3}>HOW WE WORK</button>
            </div>
            <img src={imgWeWork1} alt="" className={style.imgHoWeDesk}/>
            
           
        </div>
    )
}


export default Nostros