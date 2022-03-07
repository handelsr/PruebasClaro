import React, { useState } from 'react'
import { Table } from './Table'
import { HeadCellsAsignaturas } from '../data/HeadCellsAsignaturas'
import { HeadCellsEstudiantes } from '../data/HeadCellsEstudiantes'

export const Asignaturas = () => {

  const [showEstudiantes, setshowEstudiantes] = useState(false)

  const asignaturas = async () => {
    const url='http://localhost:64585/api/ObtenerAsignaturas'
    const fetchAsignaturas = await fetch(url)
    const asignaturas = await fetchAsignaturas.json()

    const BodyRowsAsignaturas = asignaturas.map((asignatura) => {
      return asignatura.values()
    })

    return BodyRowsAsignaturas
  }

  return (
    <div className="row">
      <div className="col-6">
        <h1>Asignaturas</h1>
        <Table 
          HeadCells={HeadCellsAsignaturas} 
          BodyRows={asignaturas} 
          setshowEstudiantes={setshowEstudiantes}
        />
      </div>
      { showEstudiantes && 
      <div className="col-6">
        <h1>Estudiantes</h1>
        <Table HeadCells={HeadCellsEstudiantes} BodyRows={asignaturas}/>
      </div>
      }
    </div>
  )
}
