import React, { useState, useEffect } from 'react';
import schema from './LoginSchema';
import * as yup from 'yup';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
//Components imports
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 94vh;
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

  const { push } = useHistory();

  const postNewLogin = (newLogin) => {
    axios
      .post('https://use-my-tech-app.herokuapp.com/api/auth/login', newLogin)
      .then((res) => {
        console.log(res);
        setLogins([...logins, res.data]);
        setFormValues(initialFormValues);
        const token = res.data.token;
        localStorage.setItem('token', `"${token}"`);
        if (res.data.role === 'owner') {
          push('/owner');
        } else {
          push('/renter');
        }
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
    postNewLogin(newLogin);
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
const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
  };
};
export default connect(mapStateToProps, {})(LoginFormMain);
