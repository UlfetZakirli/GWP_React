import { ErrorMessage, useField } from 'formik'
import React from 'react'

const InputField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)
    console.log('meta', meta);
    return (
        <div className='mt-4'>
            <label className='d-flex'>{label}</label>
            <input  autoComplete='off' className={`form-control input shadow-none ${meta.touched && (meta.error ? 'is-invalid' : 'is-valid')}`} {...props} {...field} />
            <ErrorMessage className='error' component='div' name={field.name} />
        </div>
    )
}

export default InputField