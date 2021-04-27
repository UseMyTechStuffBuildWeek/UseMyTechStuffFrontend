import React from 'react';
import styled from 'styled-components'

const StyledForm = styled.form`
    font-family: 'Poppins', sans-serif;
    background-color: #1cc5dc;
    width: 100%;
    height: 100vh;
`


export default function LoginForm({ values, submit, change, disabled, errors }) {

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        change(name, value)
    }


    return (
        <StyledForm id='login-form' onSubmit={onSubmit}>
            <div className="username-input">
                <h2>Login</h2>
                <div className="error">
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
                <label>
                    <input
                        type="text"
                        value={values.username}
                        onChange={onChange}
                        name="username"
                        placeholder="Username"
                    />
                </label>
            </div>

            <div className="password-input">
            <label>
                    <input
                        type="password"
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        placeholder="Password" 
                    />
                </label> 
            </div>

            <div>
                <button id="login-button"disabled={disabled}>Login</button>
            </div>
        </StyledForm>
    );
  }
  
  