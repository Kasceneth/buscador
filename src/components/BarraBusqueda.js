import { useState } from "react"

export default function BarraBusqueda({items,itemSeleccionados}){
    const [consulta, setConsulta ]=useState("");
    const [resultados, setResultados]= useState([]);

    function handleChange(e){
        const value=e.target.value;
        setConsulta(value);
    }

    return
    <div>
        <input type="text" onChange={handleChange} value={consulta}/>
    </div>
}
