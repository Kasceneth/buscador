import { useState } from "react"
import Resultados from "./Resultados";

export default function BarraBusqueda({ items, itemSeleccionados }) {
    const [consulta, setConsulta] = useState("");
    const [resultados, setResultados] = useState([]);

    function handleChange(e) {
        const value = e.target.value;
        setConsulta(value);
    }
    function handleResults(items) {
        setResultados(items)
    }


    return (
        <div>


            <input className="form-control" aria-describedby="passwordHelpBlock" type="text" onChange={handleChange} value={consulta} />
            <Resultados items={items}
                itemSeleccionados={itemSeleccionados}
                consulta={consulta}
                resulCalculados={handleResults} />
            {resultados && <div>{resultados.length}results</div>}
        </div>

    <div>
        {resultados&&<div>{resultados.length}results</div>}
        <input type="text" onChange={handleChange} value={consulta}/>
        <Resultados items={items}

                    itemSeleccionados={()=>{}}

                    itemSeleccionados={handleItemsSeleccionados}
                    consulta={consulta} 
                    resulCalculados={handleResults}/>
    </div>

    )

}

}

