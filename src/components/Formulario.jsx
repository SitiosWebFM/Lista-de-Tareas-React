import React , {useState} from 'react'
import '../stylesheets/Formulario.css'
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props){

  const [input,setInput] = useState('')

  const manejarCambio = e =>{
    setInput(e.target.value)
  }

  const manejarEnvio = e =>{
    e.preventDefault();

    const tareaNueva = {
      id:uuidv4(),
      texto:input,
      completada:false
    }

    props.onSubmit(tareaNueva)//Se pasa como prop para poder pasarlo a la ListaDeTareas

  }

  return(
    <form onSubmit={manejarEnvio} className='tarea-formulario'>
      <input className='tarea-input' type="text" placeholder='Ingrese su tarea!' name='texto' onChange={manejarCambio}/>
      <button className='tarea-btn'>Agregar tarea</button>
    </form>
  );
}

export default TareaFormulario