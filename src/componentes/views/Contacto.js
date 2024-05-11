import React, { useEffect, useRef, useState } from 'react';
import '../css/Contacto.css';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [textoCambiado, setTextoCambiado] = useState('');

  const cambiarNombre = (e) => {
    setNombre(e.target.value);
  }

  const enviar = (e) => {
    e.preventDefault();
  
    setTextoCambiado(nombre);
       
    clean();

    alert(`El formulario se enviara`);

    console.log(`nombre ${nombre}`);
  }

  function clean() {
    setNombre('');
    document.getElementById('apellido').value=""; // Restablecer el valor del campo
    document.getElementById('edad').value="";
    document.getElementById('telefono').value="";
  }

  /** USE EFFECT */

  const [captura, setCaptura] = useState('');
  const [textoeffect, setTextoeffect] = useState('');

  useEffect(() => {
    setTextoeffect(captura.toUpperCase());
  },[captura])

  const cambiarTextoCaptura = (e) => {
    setCaptura(e.target.value);
  }

  /** USE REF */
  const nombreuseRef = useRef();
  const apellidouseRef = useRef();
  const edaduseRef = useRef();
  const telefonouseRef = useRef();
  const [textoCambiadouseRef, setTextoCambiadouseRef] = useState('');

  function cleanUseRef() {
    nombreuseRef.current.value = '';
    // OTROS
  }

  const enviaruseRef = (e) => {
    e.preventDefault();
    setTextoCambiadouseRef(nombreuseRef.current.value + " " + apellidouseRef.current.value)
    cleanUseRef();
  }
  
  return (
    <div >
      <h1>Contacto</h1>
      <table className='tabla1'summary="Información de contacto">
        <caption>Información de contacto</caption>
        <thead>
          <tr>
            <th scope="col">Contacto</th>
            <th scope="col">Correo Electrónico</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">John Fredy Ramírez García</td>
            <td>johnfredyrg@gmail.com</td>
            <td>123456789</td>
            <td>
              <a href="mailto:johnfredyrg@gmail.com" aria-label="Enviar correo">
                <img src={require('../../assets/correo.jpeg')} alt="Icono de correo" width="30" height="30" />
              </a>
            </td>
          </tr>
          <tr>
            <td scope="row">Tu Nombre</td>
            <td>tu_email@example.com</td>
            <td>123456789</td>
            <td>
              <a href="mailto:tu_email@example.com" aria-label="Enviar correo">
                <img src={require('../../assets/correo.jpeg')} alt="Icono de correo" width="30" height="30" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>formulario</h2>
      <form className='formulario1' onSubmit={enviar}>
        <div className='formulario'>
          <label for="nombre" >Nombre</label>
          <input type="text" id='nombre' value={nombre} onChange={cambiarNombre} required />
        </div>
        <div className='formulario'>
          <label for="apellido" >Apellido</label>
          <input type="text" id='apellido' required />
        </div>
        <div className='formulario'>
          <label for="edad" >Edad</label>
          <input type="text" id='edad' required />
        </div>
        <div className='formulario'>
          <label for= "telefono">Telefono</label>
          <input type="text" id='telefono' required />
        </div>
        <button className='button_enviar' type='submit'>Enviar</button>
        <label id='texto_cambiado'>´El formulario se ha enviado correctamente a nombre de: {textoCambiado}´</label>
      </form>

      <br/>
      
      <div>
        <label for= "idinput">Uso del Hook useEffect</label>
        <input name='idinput' id='idinput' type="text" value={captura} onChange={cambiarTextoCaptura}/>
        <label id='iduseeffect'> En accion {textoeffect}</label>
      </div>

      <br/>
      <br/>
      <h2>Uso del Hook useRef</h2>
      <h2>formulario useRef</h2>
      <form className='formulario_usuref' onSubmit={enviaruseRef}>
        <div >
          <label for="idnombre">Nombre</label>
          <input type="text" id='idnombre' ref={nombreuseRef} required />
        </div>
        <div >
          <label for="idapellido">Apellido</label>
          <input type="text" id='idapellido' ref={apellidouseRef} required />
        </div>
        <div >
          <label for="idedad" >Edad</label>
          <input type="text" id='idedad' ref={edaduseRef} required />
        </div>
        <div >
          <label for="idtelefono" >Telefono</label>
          <input type="text" id='idtelefono' ref={telefonouseRef} required />
        </div>
        <button type='submit' className='button_enviar '>Enviar</button>
        <br/>
        <label for="texto" id='idtextocambiado' name="texto_cambiado">.{textoCambiadouseRef}</label>
      </form>


    </div>

    
  );
}

export default Contacto;
