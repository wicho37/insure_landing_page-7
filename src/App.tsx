import Tittle from "./componenst/header/Header"
import Seguro from "./componenst/seccion1/Seccion1"
import style from "./App.module.css"






function App() {

    return(
       <div className={style.content}>
        <Tittle />
        <Seguro />
       </div>
    )    
}


export default App