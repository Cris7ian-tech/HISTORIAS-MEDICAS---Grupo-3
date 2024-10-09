import './App.css'
import { useState, useEffect } from 'react'
import PacientesForm from './components/PacientesForm'
import PacientesLista from './components/PacientesLista'
function App() {
  const [pacientes, setPacientes] = useState([])
  const [editandoIndex, setEditandoIndex] = useState(null)

  //intento de implementacion LocalStorage
  useEffect(() => {
    const pacientesAlmacenados = localStorage.getItem('pacientes')
    if (pacientesAlmacenados) {
      setPacientes(JSON.parse(pacientesAlmacenados))
    }
  }, []);
  //a ver si guarda...
  // useEffect(() => {
  //   localStorage.setItem('pacientes', JSON.stringify(pacientes))  
  // }, [pacientes]);

  const handleAgregarPaciente = (nuevoPaciente) => {
    if (editandoIndex !== null) {
      const subirPacientes = pacientes.map((paciente, index) => 
        index === editandoIndex ? nuevoPaciente : paciente
      )
      setPacientes(subirPacientes)
      setEditandoIndex(null)
      } else {
        setPacientes([...pacientes, nuevoPaciente])
      }
    }
  
  const handleEditarPaciente = (index) => {
    setEditandoIndex(index);
  }
  
  return (
    <>
      <div className="container">
        <h1>Demo Manejo de Pacientes</h1>
        <PacientesForm 
        agregarPaciente={handleAgregarPaciente}
        editandoPaciente={editandoIndex !== null ? pacientes[editandoIndex] : null}
        />
        <PacientesLista pacientes={pacientes} editarPaciente={handleEditarPaciente}
        />
      </div>
    </>
  )
}

export default App
