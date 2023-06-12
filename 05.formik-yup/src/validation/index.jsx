import * as Yup from "yup"

export const validate = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'First Name must be 2 or more charaters!')
        .max(10, 'First Name must be 10 or less!')
        .required('First Name must be required!'),
    lastName: Yup.string()
        .min(2, 'Last Name must be 2 or more charaters!')
        .max(10, 'Last Name must be 10 or less!')
        .required('Last Name must be required!'),
    email: Yup.string()
        .email('Email is not valid!')
        .required('Exmail is required!'),
    password: Yup.string()
        .min(6, 'Password must be 6 or more')
        .required('Password is required!'),
    confirmPassword: Yup.string()
        .min(6, 'Confirm Password must be 6 or more')
        .oneOf([Yup.ref('password'), null], 'Confirm Password must match password!')
        .required('Confirm Password is required!')
})