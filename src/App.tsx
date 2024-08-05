import Tittle from "./componenst/header/Header"
import Seguro from "./componenst/seccion1/Seccion1"
import style from "./App.module.css"
import Different from "./componenst/seccion3/Seccion-3"
import Nostros from "./componenst/seccion4/Seccion-4"
import SocialNeuwork from "./componenst/redes/Redes"
import Footer from "./componenst/footer/Footer"




function App() {


    return(
       <div className={style.content}>
        <Tittle />
        <Seguro />
        <Different />
        <Nostros />
        <div className={style.content2}>
            <SocialNeuwork />
            <Footer />
        </div>
       
        
       </div>
    )    
}


export default App