import Tittle from "./componenst/header/Header"
import Seguro from "./componenst/seccion1/Seccion1"
import style from "./App.module.css"
import Different from "./componenst/seccion3/Seccion-3"




function App() {


    return(
       <div className={style.content}>
        <Tittle />
        <Seguro />
        <Different />
        
       </div>
    )    
}


export default App