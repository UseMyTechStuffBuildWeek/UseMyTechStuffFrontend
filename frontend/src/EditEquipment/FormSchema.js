import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
                .required('Name is required')
                .min(2, 'Name must be at least 2 letters long.'),
    
    description: yup.string()
              .required("Email is required")
              .min(10, 'Must be at least 10 characters long'),
    
    imgUrl: yup.string()
                 .required('Password is required')
                 .min(6, 'Password must be at least 6 characters long'),

    
})