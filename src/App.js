
import './App.css';
import Descripcion from "./componentes/Descripcion";
import React from "react";

function App() {
  return (
    <div className="App">

      <nav>
        <div className='seguir'>
          <h1 style={{ fontSize: '-webkit-xxx-large' }}>Alex Daniel Baena yepez</h1>
        </div>
      </nav>


      <div className='nombre-principal'>
        <div className='nombre'>
          <h2>@alexbyd94</h2>
        </div>
      </div>


      <Descripcion
      titulo='Sobre mi'
      />
    <div className='contenedor-foto'>
      <img className='foto-alex'
           src={require('./imagenes/alexD-r1.png')}
           alt='alex baena'
      />

    </div>

    </div>
  );
}

export default App;
