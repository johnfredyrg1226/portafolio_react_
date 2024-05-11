import React from 'react'
import '../css/Inicio.css';


const Inicio = () => {
  return (
    <section className='inico'>
      <div className='contenedor-testimonio'>
        <img
          className='imagen-testimonio'
          src={require('../../assets/foto_perfil.jpeg')}
          
          alt='John Fredy Ramírez, Foto de perfil del Programador.' />
        <div className='contenedor-texto'>
          <h1 className='nombre-testimonio'>John Fredy Ramírez García</h1>
          <h2 className='cargo-testimonio'>Desarrollador </h2>
          <p className='texto-testimonio'>No soy una maquina,pero con dedición,, sacrificio y esfuerzo. Todo se logra. </p>
          <p></p>
        </div>
      </div>
    </section>
  )
}

export default Inicio
