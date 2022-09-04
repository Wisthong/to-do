import { Header } from "./components/Header";
import { Forms } from "./components/Forms";
import { ListTask } from "./components/ListTask";
import { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <div className="container mx-auto mt-14">
      <Header />
      <div className="mt-6 md:flex">
        <Forms tareas={tareas} setTareas={setTareas} />
        <ListTask />
      </div>
    </div>
  );
}

export default App;
