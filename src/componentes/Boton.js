import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }

  return(
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
      {props.children}
    </div>
  );
}

export default Boton;

// .trimEnd() elimina espacios al final de un string,
// en este caso queda un espacio cuando es falso asi que .trimEnd()