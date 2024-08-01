import Card from "../seccion2/Seccion2" 
import img1 from "../../assets/icon-snappy-process.svg"
import img2 from "../../assets/icon-affordable-prices.svg"
import img3 from "../../assets/icon-people-first.svg"
import style from "./Seccion-3.module.css"



const Different = () => {
    return(
        <div className={style.container}>
            <strong className={style.boton3}></strong>
            <h1>We're different</h1>
            <div className={style.card}>
                <Card
                    img={img1}
                    tittle="Snappy Process" 
                    text="Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms."
                 />
                 <Card 
                     img={img2}
                     tittle="Affordable Prices" 
                     text="we don't want you worrying about high montly cost. Our price may be low. but we still offer the best coverage possible"

                 />
                <Card 
                     img={img3}
                     tittle="People First"
                     text="Our plans aren't full of conditions and clauses to prevent payouts. We make sure yuo're covered when you need it"
                 />
            </div>
        </div>
    )
}

export default Different