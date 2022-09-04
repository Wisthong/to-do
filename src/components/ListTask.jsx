import {Tareas} from './Tareas';

export const ListTask = () => {
  return (
    
    <div className="md:w-1/2 lg:w-2/5 mx-5 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl pb-5 text-center">Lista de Tareas</h2>
      <Tareas/>
      <Tareas/>
      <Tareas/>
    </div>
  )
}
