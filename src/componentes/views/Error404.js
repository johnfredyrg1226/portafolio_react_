import React from 'react'
import '../css/Error.css';

const Error404 = () => {
  return (
    <div>
      <h1>Error 404 apartado que no está enrutado.</h1>
      <div>
    <br/>
      <img className='imagen' alt='imagen de error, pagina no encontrada' src={require("../../assets/404Error.jpeg")}/>
    <br/>
    </div>
    </div>
  )
}

export default Error404
