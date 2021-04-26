import React, { useState, useEffect } from 'react';
import axios from 'axios'

//Components imports
import LoginForm from './LoginForm'

//Shape of state for form
const initialFormValues = {
    username: "",
    password: "",
  };
  
  const initialFormErrors = {
    username: "",
    password: "",
  };

  const initialLogins = [];
  const initialDisabled = true;

function LoginFormMain() {
    const [logins, setLogins] = useState(initialLogins);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const postNewLogin = (newLogin) => {
        axios.post("", newLogin)
        .then((res) => {
            setLogins([...logins, res.data]);
            setFormValues(initialFormValues);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const inputChange = (name, value) => {
        // yup
        //   .reach(schema, name)
        //   .validate(value)
        //   .then(() => {
        //     setFormErrors({
        //       ...formErrors,
        //       [name]: "",
        //     });
        //   })
        //   .catch((err) => {
        //     setFormErrors({
        //       ...formErrors,
        //       [name]: err.errors[0],
        //     });
        //   });
    
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




    return (
      <div className="App">
          <LoginForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
      </div>

    );
  }
  
  export default App;