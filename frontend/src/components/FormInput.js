import React from 'react'

export const FormInput = ({ form, handleChange }) => {
  const { size, type = "text", label, id, value = "" } =  form;
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
            value={value} 
            onChange={handleChange}
        />
    </div>
  )
}
