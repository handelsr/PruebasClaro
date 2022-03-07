import React from 'react'
import { FormInput } from './FormInput'

export const Form = ( { FormInputs } ) => {
  return (
    <div>
        <div className="row">
            {
                FormInputs.map((input, index) => {
                    return (
                        <FormInput key={index} onChange={()=>{}} {...input} />
                    )
                })
            }
        </div>
    </div>
  )
}
