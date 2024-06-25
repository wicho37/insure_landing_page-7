
import { useState } from "react"

const Click = () => {
    const [saludo, setSaludo] = useState(true)

    const cambiarSaludo = () => {
        setSaludo(!saludo)
        console.log(saludo)
    }

    return(
        <div>
            <div>
              <h2>menu</h2>
              <hr />
              <button onClick={cambiarSaludo}>cambiar</button>
              <p>{saludo ? "hola mundo" : "chao mundo" }</p>
            </div>
        </div>
    )
}


export default Click