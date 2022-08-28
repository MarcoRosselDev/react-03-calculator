import './App.css';
import imgLogo from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={imgLogo} 
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;

//find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
// comando para terminal linux delete all _modules no usados
// en caso de trabajar en un proyecto denuevo usar npm install y listo
