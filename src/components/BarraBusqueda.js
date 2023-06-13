import { useState } from "react"
import Resultados from "./Resultados";

export default function BarraBusqueda({items,itemSeleccionados}){
    const [consulta, setConsulta ]=useState("");
    const [resultados, setResultados]= useState([]);

    function handleChange(e){
        const value=e.target.value;
        setConsulta(value);
    }
    function handleResults(items){
        setResultados(items)
    }
<<<<<<< HEAD
=======

    function handleItemsSeleccionados(){
        

    }
>>>>>>> 50185288217c4fec294a9f715bc0bb861328aecb
    return(
    <div>
        {resultados&&<div>{resultados.length}results</div>}
        <input type="text" onChange={handleChange} value={consulta}/>
        <Resultados items={items}
<<<<<<< HEAD
                    itemSeleccionados={()=>{}}
=======
                    itemSeleccionados={handleItemsSeleccionados}
>>>>>>> 50185288217c4fec294a9f715bc0bb861328aecb
                    consulta={consulta} 
                    resulCalculados={handleResults}/>
    </div>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> 50185288217c4fec294a9f715bc0bb861328aecb
