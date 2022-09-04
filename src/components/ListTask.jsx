import { useEffect } from "react";
import { Tareas } from "./Tareas";

export const ListTask = ({ tareas, setTarea, deleteOneTask }) => {
  // useEffect(() => {
  //   if(tareas.length > 0){
  //     console.log('Init 🤔🤔🤔');
  //   }
  // }, [tareas])


  //TODO: State tareas del App.jsx
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 md:h-screen overflow-scroll">
      {tareas && tareas.length ? (
        <>
          <h2 className="font-black text-3xl pb-5 text-center">
            Lista de Tareas
          </h2>
          {tareas.map((tarea) => {
            return (
              <Tareas
                key={tarea.id}
                tarea={tarea}
                setTarea={setTarea}
                deleteOneTask={deleteOneTask}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="text-4xl text-white bg-blue-800 text-center font-bold">
            No hay tareas
          </h2>
        </>
      )}
    </div>
  );
};
