import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewUserForm from './NewUserForm'
import styled from 'styled-components'

import * as yup from 'yup';
import schema from './validation/formSchema'

const MainContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height: 100vh;
    background-color: #53565A;
`

const initialFormValues = {
    /// TEXT INPUTS ///
    username: '',
    password: '',
    /// DROPDOWN ///
    role: '',
}

const initialFormErrors = {
    username: '',
    password: '',
    role: '',
}
  
const initialUsers = []
const initialDisabled = true

function NewUserFormMain() {
    const [users, setUsers] = useState(initialUsers) 
    const [formValues, setFormValues] = useState(initialFormValues) 
    const [formErrors, setFormErrors] = useState(initialFormErrors) 
    const [disabled, setDisabled] = useState(initialDisabled)
    
    const postNewUsers = user => {
        axios
        .post('https://use-my-tech-app.herokuapp.com/api/auth/register', user)
        .then(res => {
          //console.log(res.data);
          setUsers([...users, res.data])
          setFormValues(initialFormValues);
        })
        .catch(err => {
          console.log(err);
        })
    }

    useEffect(() => {
        schema.isValid(formValues).then(valid => {
          setDisabled(!valid)
        })
      }, [formValues])
    
    const inputChange = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then(() => {
            setFormErrors({...formErrors,[name]: "",});
          })
          .catch(err => {
            setFormErrors({...formErrors, [name]: err.errors[0],
            });
          });
    
        setFormValues({...formValues, [name]: value})
    }

    const submitForm = () => {
        const newUser = {
          username: formValues.username.trim(),
          password: formValues.password.trim(),
          role: formValues.role.trim(),
        }
    
        postNewUsers(newUser);
    }

    return (
      <MainContainer>
        <NewUserForm
        values={formValues}
        change={inputChange}
        submit={submitForm}
        disabled={disabled}
        errors={formErrors}
        />
      </MainContainer>
    );
  }
  
  export default NewUserFormMain;