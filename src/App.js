
import './App.css';
import Descripcion from "./components/Descripcion";
import React from "react";

function App() {
  return (
    <div className="App">

      <nav>
        <div className='seguir'>
          <h1 style={{ fontSize: 'xxx-large' }}>Alex Daniel Baena Yepez</h1>
        </div>
      </nav>


      <div className='nombre-principal'>
        <div className='nombre'>
          <h2><a href={("https://github.com/alexbyd")}>@alexbyd</a></h2>
        </div>
      </div>


      <Descripcion
      titulo='Sobre mi'
      />
    <div className='contenedor-foto'>
      <img className='foto-alex'
           src={require('./images/alexD-r1.png')}
           alt='alex baena'
      />
------
    </div>

    </div>
  );
}

export default App;
