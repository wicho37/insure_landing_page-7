import style from "./Seccion2.module.css"


const Card = ({img, tittle, text}) => {
    
    return(
        <div  className={style.contentCard}>
            <img src={img} alt="" />
            <div>
                <h3>{tittle}</h3> 
                <p>{text}</p>
            </div>
        </div>
    )
}


export default Card