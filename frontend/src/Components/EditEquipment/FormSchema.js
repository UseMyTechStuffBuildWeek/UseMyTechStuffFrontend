import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
                .required('Name is required')
                .min(2, 'Name must be at least 2 letters long.'),
    
    description: yup.string()
              .required("Description is required")
              .min(10, 'Must be at least 10 characters long'),
    
    imgUrl: yup.string()

    
})