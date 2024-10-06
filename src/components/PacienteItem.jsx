

const PacienteItem = ( {paciente, editarPaciente}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <h5>{paciente.name}</h5>
      <h5>{paciente.apellido}</h5>

      <p>Edad: {paciente.edad}</p>
      <p>Diagnostico: {paciente.diagnostico}</p>
    </div>
    
      <button className="btn btn-primary" onClick={() => editarPaciente(paciente)}>Editar</button>
      <button className="btn btn-danger">Eliminar</button>
      
    </li>
  )
}

export default PacienteItem