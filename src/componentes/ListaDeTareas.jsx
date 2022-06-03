import React, {useState} from 'react';
import TareaFormulario from './TareaFormulario.jsx';
import Tarea from './Tarea.jsx';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas(){
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) =>{
    //trim quita los espcios al principio y al final para verificar que la cadena no este vacia
    //el argumento tarea nos llega como objeto de TareaFormulario es la constante q creamos
    // y prop.onSubmit no las devuelve
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim()
      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas)
    }
  };

  const eliminarTarea = (id) =>{
    const tareasActualizadas = tareas.filter((tarea)=> tarea.id !== id)
    setTareas(tareasActualizadas)
  };

  const completarTarea = (id) =>{
    const tareasActualizadas = tareas.map((tarea) =>{
      if(tarea.id === id){
        tarea.completada = !tarea.completada // cuando son booleanos se invierte su valor
      }
    return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea)=>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;
