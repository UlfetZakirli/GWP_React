import React from 'react'
import { Form, Formik } from 'formik';
import InputField from './InputField';
import { validate } from '../validation';


const SignUp = () => {
    return (
        <div>
            <h1>SignUp</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}

                validationSchema={validate}
            >
                {
                    (({ errors, touched }) => (
                        <Form>
                            <InputField type='text' name='firstName' label='First Name' />
                            {/* {errors.firstName && touched.firstName && (<div>{errors.firstName}</div>)} */}
                            <InputField type='text' name='lastName' label='Last Name'/>
                            <InputField type='email' name='email' label='Email' />
                            <InputField type='password' name='password' label='Password' />
                            <InputField type='password' name='confirmPassword' label='Confirm Password' />
                            <button className="btn btn-primary mt-4">Submit</button>
                        </Form>
                    ))
                }


            </Formik>
        </div >
    )
}

export default SignUp