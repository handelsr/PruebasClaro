import React from 'react'

export const FormInput = ({size, type="text", label, id, valor="", onChange }) => {
  return (
    <div className={`col-${size}`}>
        <label 
            htmlFor={id} 
            className="form-label"
        >
            { label }
        </label>

        <input 
            type={type}
            className="form-control" 
            id={id} 
            value={valor} 
            onChange={onChange}
        />
    </div>
  )
}
