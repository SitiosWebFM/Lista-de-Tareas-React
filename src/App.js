import './App.css';
import logo from './img/logo-freecodecamp.png'
import ListaTareas from './components/ListaDeTareas'


function App() {
  return (
    <div className='app-tareas'>
      <div className='freecodecamp-logo-contenedo'>
        <img src={logo} alt='Logo Freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <div className='contenido'>
          <h1>Mis Tareas</h1>
          <ListaTareas/>
        </div>
      </div>
    </div>
  );
}

export default App;
