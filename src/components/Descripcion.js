import React from "react";
import '../styles/descripcion.css';
import '../App.css';
import '../small.css';


function Descripcion(props) {
  return(
      <div className='lista'>
        <h4 className='subtitulo'>{props.titulo}</h4>
        <p>Me considero autodidacta y con ganas de nunca dejar de aprender y
          practicar para hacer eficiente lo aprendido, creo que la curiosidad
          por su naturaleza esta unido a nosotros los humanos, me gusta la
          fotografia y se tocar guitarra.
          Trato de resolver problemas de manera sistematica, en la practica vi que
          muchos problemas tienen la misma forma creando asi patrones.
          trabaje en&nbsp;
          <a href={("https://cookie-monster.vercel.app")} className="color-verde">Monstruo de las galletas,&nbsp;&nbsp;</a>
          <a href={("https://somedclin.vercel.app")} className="color-verde">Somedclin,&nbsp;</a>
          <a href={("https://alexbaena.me/")} className="color-verde">&nbsp;Portafolio</a>.</p>
        <div className='lista-detalles'>
        <ul>
          <li> Actualmente estoy trabajando en...  {/* este es el color para los enlaces  --> #1C9963 */}</li>
          <li> Actualmente estoy aprendiendo... como funciona fetch </li>
          <li> Busco colaborar en...FreeCodeCamp mediante hackoctoberfest</li>
          <li> Pregúntame sobre...</li>
          <li> Cómo contactarme: ...</li>
          <li> Dato curioso: ...</li>
        </ul>
      </div>



        <div className='contenedor-foto'>
          <div className='paraLaFoto'>
            <img className='foto-alex'
                 src={require('../images/alexD-r1.png')}
                 alt='alex baena'
            />
          </div>
        </div>

      </div>
  );
}

export default Descripcion;