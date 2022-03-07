import React from 'react'
import { Form } from './Form'
import { FormInputs } from '../data/FormInputs'

export const AgregarEstudiante = () => {
    const handleClick = () => {
        
    }
  return (
    <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Agregar Estudiante</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <Form FormInputs={FormInputs}/>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary" onClick={handleClick}>Guardar</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
