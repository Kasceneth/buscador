import { useState } from "react";

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
  return (
    <div >
      <button onClick={handleClick} name="all"> Todas </button>
      <button onClick={handleClick} name="people"> Personas </button>
      <button onClick={handleClick} name="calendar"> Calendario </button>
      <button onClick={handleClick} name="email"> Asunto Correo </button>
      <div>
        {data.map((item)=>(
          <div>{item.title}</div>
          ))}
      </div>
      
    </div>
  );
}

export default App;
