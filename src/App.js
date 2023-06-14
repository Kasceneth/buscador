import { useState } from "react";
import BarraBusqueda from "./components/BarraBusqueda";

const people = [
  {
    id: "p001",
    title: "Judy Moreno"
  },
  {
    id: "p002",
    title: "Carlos Ospina"
  },
  {
    id: "p003",
    title: "Andres Tellez"
  },
  {
    id: "p004",
    title: "Kelly Demoya"
  },
  {
    id: "p005",
    title: "Jaisy"
  }
]

const calendar = [
  {
    id: "c001",
    title: "Clase seguimiento desarrollo frontEnd"
  },
  {
    id: "c002",
    title: "Tutoria front End"
  },
  {
    id: "c003",
    title: "Reunión monitoria atenea"
  },

]

const email = [
  {
    id: "e001",
    title: "Asistencia clase"
  },
  {
    id: "e002",
    title: "solicitud  asesoría monitor"
  },
  {
    id: "e003",
    title: "Agendamiento taller final"
  },
]

function App() {
  const [data, setData] = useState([...people, ...calendar, ...email]);

  const [selection, setSelection] = useState(null);
  const [option, setOption] = useState('all');
  const [cont, setCont] = useState(1);

  function handleClick(e) {
    const key = e.target.name;
    switch (key) {
      case 'all':
        setData([...people, ...calendar, ...email]);
        setOption('all');
        break;
      case 'people':
        setData([...people]);
        setOption('people');
        break;
      case 'calendar':
        setData([...calendar]);
        setOption('calendar');
        break;
      case 'email':
        setData([...email]);
        setOption('email');
        break;

      default:
        break;
    }

  }
function handleItemSeleccionado(item){
  setSelection(item);
}
  return (
    <div >
      <div style={{ width: "800", height: "800" }}>
        <h1></h1>
      </div>
      <BarraBusqueda items={data} itemSeleccionados={handleItemSeleccionado} />
      <nav class="navbar bg-body-tertiary">
        <form class="container-fluid">
          <div class="input-group">
            <button className="btn btn-success" onClick={handleClick} name="all"> Todas </button>
            <button className="btn btn-success" onClick={handleClick} name="people"> Personas </button>
            <button className="btn btn-success" onClick={handleClick} name="calendar"> Calendario </button>
            <button className="btn btn-success" onClick={handleClick} name="email"> Asunto Correo </button>
            <button className="btn btn-success" onClick={() => { setCont(cont + 1) }}>{cont}</button>
          </div>
          </form>
          </nav>
          {selection ? <div> Tu seleccionaste: {selection.title}</div>:""}
        </div>
        );
}



export default App;

