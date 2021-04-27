import * as yup from 'yup'

export default yup.object().shape({
    username: yup
        .string()
        .required("username is required")
        .min(2, "username must be at least 2 characters"),
    password: yup
        .string()
        .required("password is required")
        .min(6, "password must contain at least 6 characters")
});