import React from 'react';
import '../hojas-de-estilo/BotonClear.css'

const BotonClear = (props) => (
  <div className='Boton-clear'>
    {props.children}
  </div>
);

export default BotonClear;