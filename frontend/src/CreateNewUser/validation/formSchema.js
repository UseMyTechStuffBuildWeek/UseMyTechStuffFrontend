import * as yup from 'yup'

//setting up validation using yup
export default yup.object().shape({
    username: yup
    .string()
    .required('Username is required'),
    password: yup
    .string()
    .required('Password is required'),
    role: yup
    .string()
    .oneOf(['Owner', 'Renter'], 'Role is required'),
})