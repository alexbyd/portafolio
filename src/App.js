import './App.css';
import './small.css';
import Descripcion from "./components/Descripcion";
import React from "react";

function App() {
  return (
    <div className="App">

      <nav>
        <div className='seguir'>
            <h1>@alexbyd94</h1>
        </div>
      </nav>

<div className='division'>
      <div className='nombre-principal'>
        <div className='nombre'>
          <h1>Alex Baena{/* <!--poner aqui los iconos para el tamaño small por aqui-->*/}</h1>
        </div>
      </div>

  <Descripcion
      titulo='Sobre mi'
  />
</div>


    </div>
  );
}

export default App;
