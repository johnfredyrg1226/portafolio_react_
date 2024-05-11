import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Inicio from '../componentes/views/Inicio';
import Error404 from '../componentes/views/Error404';
import Principal from '../componentes/views/Principal'; 
import Proyectos from '../componentes/views/Proyectos';
import Servicios from '../componentes/views/Servicios';
import Curriculum from '../componentes/views/Curriculum';
import Contacto from '../componentes/views/Contacto';
import HeaderNav from '../componentes/layout/HeadedrNav';
import Footer from '../componentes/layout/Footer';
import Menu from '../componentes/Menu';


const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Encabezado y Navegación */}
      <HeaderNav/>
      <Menu/>
      <hr />
      {/* Contenido Central */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/principal" element={<Principal />} /> 
        <Route path="/proyectos" element={<Proyectos />}/>
        <Route path="/servicios" element={<Servicios />}/>
        <Route path='/curriculum' element={<Curriculum/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
      {/* Pie de página */}
      <hr />
      <Footer/>
    </BrowserRouter>
  );
};

export default MisRutas;

