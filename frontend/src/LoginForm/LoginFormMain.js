import React, { useState, useEffect } from 'react';
import axios from 'axios';
import schema from './LoginSchema';
import * as yup from 'yup';
import styled from 'styled-components';
import axiosWithAuth from '../axiosWithAuth';
import loginSuccess from '../Actions/TechStuffActions';

//Components imports

import LoginForm from './LoginForm';

//Styles
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #53565a;
`;

//Shape of state for form
const initialFormValues = {
  username: '',
  password: '',
};

const initialFormErrors = {
  username: '',
  password: '',
};

const initialLogins = [];
const initialDisabled = true;

function LoginFormMain() {
  const [logins, setLogins] = useState(initialLogins);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewLogin = (newLogin) => {
    axios
      .post('/api/auth/login', newLogin)
      .then((res) => {
        console.log(res);
        setLogins([...logins, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    // postNewLogin(newLogin);
    props.loginSuccess(newLogin);
  };

  //side effects
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <MainContainer>
      <LoginForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </MainContainer>
  );
}

export default LoginFormMain;
