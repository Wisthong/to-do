export const Tareas = ({ tarea, setTarea, deleteOneTask }) => {
  const { titulo, fecha, description,id } = tarea;
  const handleDelete = () => {
    if (confirm('¿Estas seguro de eliminar la tarea?')) {
      deleteOneTask(id);      
    }
  }


  return (
    <div className="bg-white shadow-md px-5 py-10 mb-5 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Identificador:<span className="font-normal normal-case"> {id} </span>{" "}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Titulo:<span className="font-normal normal-case"> {titulo} </span>{" "}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha:<span className="font-normal normal-case"> {fecha} </span>{" "}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Description:
        <span className="font-normal normal-case"> {description} </span>
      </p>
      <div>
        <button
          className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold rounded-full mt-2 w-1/2"
          type="button"
          onClick={() => setTarea(tarea)}
        >
          Update
        </button>
        <button
          className="bg-red-600 hover:bg-red-800 text-white font-bold rounded-full mt-2 w-1/2"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
