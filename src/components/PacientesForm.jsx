import { useState, useEffect } from "react";

const PacientesForm = ({agregarPaciente, editandoPaciente}) => {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [diagnostico, setDiagnostico] = useState("");

  //cargar datos al editar 
  useEffect(() => {
    if (editandoPaciente) {
      setName(editandoPaciente.name);
      setApellido(editandoPaciente.apellido);
      setEdad(editandoPaciente.edad);
      setDiagnostico(editandoPaciente.diagnostico);
    }
  }, [editandoPaciente]);




  const handleSubmit = (e) => {
    e.preventDefault();
    const paciente = { name, apellido, edad, diagnostico };
    agregarPaciente(paciente, edad, diagnostico);
    setName("");
    setApellido("");
    setEdad("");
    setDiagnostico("");
  };



  // useEffect(() => {
  //   localStorage.setItem("registro", JSON.stringify(agregarPaciente));
  // }, [agregarPaciente]);

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input type="text" className="form-control" placeholder="Nombre del paciente" value={name} onChange={(e) => setName(e.target.value)} required />  
      </div>

      <div className="mb-3">
        <label className="form-label">Apellido</label>
        <input type="text" className="form-control" placeholder="Apellido del paciente" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
      </div>

      <div className="mb-3">
        <label className="form-label">Edad</label>
        <input type="text" className="form-control" placeholder="Edad del paciente" value={edad} onChange={(e) => setEdad(e.target.value)} required />
      </div>

      <div className="mb-3">
        <label className="formllabel">Diagnostico</label>
        <input type="text" className="form-control" placeholder="Diagnostico del paciente" value={diagnostico} onChange={(e) => setDiagnostico(e.target.value)} required />
      </div>

      <button type="submit" className="btn btn-primary">Agregar Paciente</button>
        {/* { editandoPaciente ? `agregando paciente...❗ ` : `Paciente agregado ✔`} */}
    </form>
  )
}

export default PacientesForm