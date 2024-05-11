import React from 'react'
import '../componentes/css/Menu.css';

const Menu = () => {
  return (
    <div className='botones'>
      <button className="boton" onClick={() => window.location.href = "/"}>Inicio</button>
      <button className="boton" onClick={() => window.location.href = "/principal"}>Principal</button>
      <button className="boton" onClick={() => window.location.href = "/proyectos"}>Proyectos</button>
      <button className="boton" onClick={() => window.location.href = "/servicios"}>Servicios</button>
      <button className="boton" onClick={() => window.location.href = "/curriculum"}>Curriculum</button>
      <button className="boton" onClick={() => window.location.href = "/contacto"}>Contacto</button>
    </div>
  );
  
  
  
  
}

export default Menu
