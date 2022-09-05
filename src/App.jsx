import { Header } from "./components/Header";
import { Forms } from "./components/Forms";
import { ListTask } from "./components/ListTask";
import { useEffect, useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]); // TODO: States
  const [tarea, setTarea] = useState({}); // TODO: States
  const deleteOneTask = (id) => {
    // console.log('******Delete task*****', id);
    const arrayTemp = tareas.filter(parametro => parametro.id !== id);
    setTareas(arrayTemp)
  }

  useEffect(() => { //TODO: Guardar en localStorage el object task
    const getAllLocalStorage = () => {
      const resOk = JSON.parse(localStorage.getItem('tareas')) ?? [];
      setTareas(resOk);
    }
     
    getAllLocalStorage();

  }, [])

  useEffect(() => { //TODO: Guardar en localStorage el object task
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])
  

  return (
    <div className="container mx-auto mt-14">
      <Header />
      <div className="mt-6 md:flex">
        <Forms tarea={tarea} tareas={tareas} setTareas={setTareas} setTarea={setTarea} />
        <ListTask tareas={tareas} setTarea={setTarea} deleteOneTask={deleteOneTask} /> {/* TODO: Componente tiene unos states, en este caso tareas */}
      </div>
    </div>
  );
}

export default App;
