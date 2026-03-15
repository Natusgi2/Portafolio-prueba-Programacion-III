import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // 1. Definimos un "Estado" para guardar el mensaje del servidor
  const [mensaje, setMensaje] = useState('Cargando saludo...')


 

  // 2. useEffect: Se ejecuta automáticamente cuando el componente aparece
  useEffect(() => {
    obtenerDatos();
  }, []); // El array vacío [] significa: "hazlo solo una vez al cargar"

  // 3. Función asíncrona para llamar al servidor
  const obtenerDatos = async () => {
    try {
      const respuesta = await axios.get('http://localhost:3000/api/saludo');
      // Guardamos el mensaje que viene del backend en nuestro estado
      setMensaje(respuesta.data.mensaje);
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      setMensaje("No se pudo conectar con el servidor.");
    }
  }

  return (
    <div className="App">
      <h1>Mi Portafolio</h1>
      <div className="card">
        <p>Respuesta del servidor:</p>
        {/* Mostramos el contenido de la variable 'mensaje' */}
        <h2 style={{ color: '#646cff' }}>{mensaje}</h2>
      </div>
      <p>Estudiante de Ingeniería de Sistemas</p>
    </div>
  )
}

export default App