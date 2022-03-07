import React, { useState } from 'react'
import { FormInput } from './FormInput'

export const Form = ( { FormInputs } ) => {

    const [form, setForm] = useState(FormInputs);
  
    const handleChange = ({target}) => {
        const { value, id } = target;
  
        setForm(form.map((el) => {
            if (el.id === id) {
                return (
                    {
                        ...el,
                        'value': value
                    }
                )
            }
            else {
                return el
            }
        }));
    }

  return (
    <div>
        <div className="row">
            {
                form.map((input, index) => {
                    return (
                        <FormInput form={input} key={index} handleChange={handleChange} />
                    )
                })
            }
        </div>
    </div>
  )
}
