import React from "react";
import "../hojas-de-estilo/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, tareaCompletada, eliminarTarea }) {
  return (
  	<div className ={ completada ? "tarea-contenedor completada" : "tarea-contenedor"} >
  		<div className = "tarea-texto" onClick={()=>tareaCompletada(id)} >
  			{ texto }
  		</div>
  		<div className = "tarea-contenedor-iconos" onClick={()=>eliminarTarea(id)} >
  			<AiOutlineCloseCircle className = "tarea-icono"  />
  		</div>
  	</div >
  );
}
export default Tarea;
