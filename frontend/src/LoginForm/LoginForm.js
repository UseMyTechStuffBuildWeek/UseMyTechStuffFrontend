import React from 'react';

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
        <form id='login-form'>
            <div className="username-input">
                <h2>Login Page</h2>
                <div className="error">
                    {/* <div>{errors.username}</div> */}
                    {/* <div>{errors.password}</div> */}
                </div>
                <label>
                    <input
                      type="text"
                      value=""
                      onChange=""
                      name="username"
                      placeholder="Username"
                    />
                </label>
            </div>

            <div className="password-input">
               <label>
                    <input
                       type="text"
                       value=""
                       onChange=""
                       name="password"
                       placeholder="Password" 
                    />
                </label> 
            </div>

            <div>
                <button id="login-button">Login</button>
            </div>
        </form>
    );
  }
  
  