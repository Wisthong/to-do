import { useEffect, useState } from "react";
import { AlertError } from "./AlertError";

export const Forms = ({ tareas, setTareas, tarea, setTarea }) => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const generarId = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  };
  useEffect(() => {
    //TODO: Para completar campos en el update.
    if (Object.keys(tarea).length > 0) {
      setTitulo(tarea.titulo);
      setDescription(tarea.description);
      setFecha(tarea.fecha);
      console.log("Tenemos tarea 📔📓");
    }
  }, [tarea]);

  //TODO: Validación de forms
  const handleSubmit = (event) => {
    event.preventDefault();
    if ([titulo, fecha, description].includes("")) {
      setError(true);
      return;
      // alert('Hay campos sin llenar😡😡😡')
    }
    setError(false);

    //TODO: Object tarea
    const objTarea = {
      titulo,
      fecha,
      description,
      // id: generarId(),
    };

    setDescription("");
    setFecha("");
    setTitulo("");

    if (tarea.id) {
      //TODO: Existe id, entonces realiza el update
      
      objTarea.id = tarea.id;

      const taskUpdate = tareas.map((tareaState) =>
        tareaState.id === tarea.id ? objTarea : tareaState
      );

      setTareas(taskUpdate);
      setTarea({});

      console.log("Edit task");
    } else {
      objTarea.id = generarId();
      setTareas([...tareas, objTarea]);
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center pb-5">
        Creación de Tareas
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <AlertError>Falta llenar el campo</AlertError>}
        {/* {error && <AlertError msg='😡Falta llenar el campo😡'/>} */}
        <div className="mb-5">
          <label htmlFor="titulo" className="text-center block text-blue-800 font-bold">
            Titulo
          </label>
          <input
            id="titulo"
            type="text"
            placeholder="Titulo de la tarea"
            className="border-2 w-full p-3 mt-3 rounded-md "
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fecha" className="text-center block text-blue-800 font-bold">
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            placeholder="Fecha de la tarea"
            className="border-2 w-full p-3 mt-3 rounded-md "
            value={fecha}
            onChange={(event) => setFecha(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="text-center block text-blue-800 font-bold"
          >
            Descripción
          </label>
          <textarea
            id="description"
            type="text"
            placeholder="Description de la tarea"
            className="border-2 w-full p-3 mt-3 rounded-md "
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        {!tarea.id ? (
          <input
            type="submit"
            className="bg-blue-600 w-full p-3 rounded text-white uppercase font-bold hover:bg-blue-900 transition-colors cursor-pointer"
            value="Crear Tarea"
          />
        ) : (
          <input
            type="submit"
            className="bg-orange-400 w-full p-3 rounded text-white uppercase font-bold hover:bg-orange-600 transition-colors cursor-pointer"
            value="Modificar Tarea"
          />
        )}
      </form>
    </div>
  );
};
