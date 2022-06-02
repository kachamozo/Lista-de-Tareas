import React from 'react';
import '../hojas-de-estilo/TareaFormulario.css';

function TareaFormulario(props){
  return (
    <form className="tarea-formulario">
      <input
        type="text"
        className="tarea-input"
        placeholder='Escribe una Tarea'
        name='texto' />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  )
};

export default TareaFormulario;
