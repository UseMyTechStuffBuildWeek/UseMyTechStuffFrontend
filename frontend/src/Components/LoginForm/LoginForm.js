import React from 'react';
import styled from 'styled-components'

const StyledForm = styled.form`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 4px;
    box-shadow: 0px 1px 6px 2px rgb(128, 127, 127);
    display:block;
    position:relative;
    background-image: linear-gradient(to bottom right, #FFCE00, #FE4880);
`
const LoginContainer = styled.div`
    padding:30px;
    input, button {
        appearance: none;
        background: none;
        border: none;
        outline: none;
    }

    h2 {
        color: black;
        font-size: 1.7rem;
        font-weight: 500;
        margin-bottom: 10%;
    }

    button {
        display:inline-block;
        padding: 10px 15px;
        border-radius: 8px;
        background-color: #F8F8F8;
        cursor:pointer;
        font-weight:700;

        &:hover {
            background-image: linear-gradient(to bottom, #FE4880, #FFCE00);
        }
    }
`
const FormGroup = styled.div`
    display:block;
    width: 300px;
    margin-bottom: 18%;

    label {
        display:block;
        color: black;
        font-size: 1rem;
        margin-bottom: 10%;
        transition: 0.4s;
    }

    &:focus-within label {
        color: white;
    } 

    input {
        display:block;
        padding: 10px 15px;
        background-color: #F8F8F8;
        border-radius: 8px;
        transition: 0.4s;

        &:focus {
            box-shadow: 0px 0px 3px rgba(0,0,0,0.2);
        }
    }

`

const Errors = styled.div `
    color: red;
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
            <LoginContainer>
                <h2>Login</h2>
                <Errors>{errors.username}</Errors>
                <FormGroup>
                    <label>
                        <input
                            type="text"
                            value={values.username}
                            onChange={onChange}
                            name="username"
                            placeholder="Username"
                        />
                    </label>
                </FormGroup>

                <FormGroup>
                    <Errors>{errors.password}</Errors>
                    <label>
                        <input
                            type="password"
                            value={values.password}
                            onChange={onChange}
                            name="password"
                            placeholder="Password" 
                        />
                    </label> 
                </FormGroup>
                <div>
                    <button id="login-button"disabled={disabled}>Login</button>
                </div>
            </LoginContainer>
        </StyledForm>
    );
  }
  
  