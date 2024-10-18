import DataTable from "react-data-table-component"
import { useState, useEffect } from "react";

//React Data Table Component
const TablaPacientes = () => {
  
  const columns = [
    {
      name: 'Nombre',
      selector: row => row.nombre,
      sortable: true,
    },
    {
      name: 'Apellido',
      selector: row => row.apellido,
      sortable: true,
    },
    {
      name: 'Edad',
      selector: row => row.edad,
      sortable: true,
    },
    {
      name: 'Diagnostico',
      selector: row => row.diagnostico,
      sortable: true,
    },

  ];

  const data = [
    {
      nombre: 'Carlos',
      apellido: 'Gierre',
      edad: 30,
      diagnostico: 'Saludable',
    },
    {
      nombre: 'Ana',
      apellido: 'Martinez',
      edad: 25,
      diagnostico: 'Saludable',
    },
    {
      nombre: 'Luis',
      apellido: 'Hernandez',
      edad: 40,
      diagnostico: 'Diabetes',
    },
    {
      nombre: 'Javier',
      apellido: 'Lopez',
      edad: 32,
      diagnostico: 'Saludable',
    },
    {
      nombre: 'Elena',
      apellido: 'Perez',
      edad: 27,
      diagnostico: 'Saludable',
    },
    {
      nombre: 'Andres',
      apellido: 'Ramirez',
      edad: 45,
      diagnostico: 'Cancer',
    },
    {
      nombre: 'Miguel',
      apellido: 'Torres',
      edad: 38,
      diagnostico: 'Saludable',
    },
    {
      nombre: 'Laura',
      apellido: 'Rojas',
      edad: 30,
      diagnostico: 'Saludable',
    },
    {
      nombre: 'Diego',
      apellido: 'Molina',
      edad: 26,
      diagnostico: 'Saludable',
    },
    {
      nombre: 'Veronica',
      apellido: 'Hurtado',
      edad: 41,
      diagnostico: 'Saludable',
    },
    {
      nombre: 'Raquel',
      apellido: 'Gonzalez',
      edad: 34,
      diagnostico: 'Saludable',
    },
    {
      nombre: 'Santiago',
      apellido: 'Palacios',
      edad: 39,
      diagnostico: 'Cancer',
    },
    {
      nombre: 'Claudia',
      apellido: 'Bermudez',
      edad: 29,
      diagnostico: 'Saludable',
    },
    {
      nombre: 'Fernando',
      apellido: 'Lopez',
      edad: 42,
      diagnostico: 'Saludable',
    },
  ]

  //registro:
  const [records, setRecords] = useState(data);
  const [loading, setLoading] = useState(true);

  //simulamos carga:
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRecords(data);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []); 


  //Buscador
  const handleChange = (e) => {
    const filteredRecords =data.filter(record => {
      return record.nombre.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setRecords(filteredRecords)
  }

  //Spiner de carga:
  const loader = () => {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }



  return (

    <>
    <div>TablaPacientes
      <h2>Tabla de Pacientes</h2>

      <input type="text" name="buscador" id="buscador"
      placeholder="Buscar"
      onChange={handleChange}
      />

      <DataTable
      title="Datos de Pacientes"
        columns={columns} 
        data={records}  
        selectableRows
        onSelectedRowsChange={data => console.log(data)}   
        pagination
        fixedHeader
        progressPending={loading}
        //progressComponent={loader}
        
        />     
    </div>    
    </>
  )
}

export default TablaPacientes