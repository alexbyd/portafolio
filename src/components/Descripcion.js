import React from "react";
import '../styles/descripcion.css';

function Descripcion(props) {
  return(
      <div className='lista'>
        <h3 className='subtitulo'>{props.titulo}</h3>
        <div className='lista-detalles'>
        <ul>
          <li>creador de el monstruo de las galletas</li>
          <li>investigar y comprender como funciona fetch y hacer una entrada de
          blog con eso para mostrar</li>
          <li>crear una funcion en js que cree 'li' de manera iterativa y se pasa al
          componente mediante un props</li>
        </ul>
      </div>

      </div>
  );
}

export default Descripcion;