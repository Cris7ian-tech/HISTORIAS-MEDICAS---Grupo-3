import PacienteItem from "./PacienteItem";  

const PacientesLista = ({pacientes, editarPaciente}) => {

  return (
    <>
    <h3>Registro de Pacientes</h3>
    <ul className="lista-grupo">
      {pacientes.map((paciente, index) => (
        <PacienteItem key={index} paciente={paciente} editarPaciente={() => editarPaciente(index)} />
      ))}
    </ul>
    </>
  )
  
}

export default PacientesLista