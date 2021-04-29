import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export const NewUserContainer = styled.div`
  padding: 30px;
  input,
  button {
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
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    background-color: #f8f8f8;
    cursor: pointer;
    font-weight: 700;

    &:hover {
      background-image: linear-gradient(to bottom, #fe4880, #ffce00);
    }
  }
`;

const StyleForm = styled.form`
  border: 1px solid rgb(210, 210, 210);
  border-radius: 4px;
  box-shadow: 0px 1px 6px 2px rgb(128, 127, 127);
  display: block;
  position: relative;
  background-image: linear-gradient(to bottom right, #ffce00, #fe4880);
`;

const FormGroup = styled.div`
  display: block;
  width: 300px;
  margin-bottom: 18%;

  label {
    display: block;
    color: black;
    font-size: 1rem;
    margin-bottom: 10%;
    transition: 0.4s;
  }

  &:focus-within label {
    color: white;
  }

  input {
    display: block;
    padding: 10px 15px;
    background-color: #f8f8f8;
    border-radius: 8px;
    transition: 0.4s;

    &:focus {
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    }
  }

  select {
    display: block;
    padding: 10px 15px;
    background-color: #f8f8f8;
  }
`;

const Errors = styled.div`
  color: red;
`;

function NewUserForm(props) {
  const { values, change, submit, disabled, errors } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  const { push } = useHistory();

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <StyleForm onSubmit={onSubmit}>
      <NewUserContainer>
        <h2>Register</h2>
        <Errors>{errors.username}</Errors>
        <FormGroup>
          <label>
            Username&nbsp;
            <input
              type="text"
              value={values.username}
              onChange={onChange}
              name="username"
              placeholder="enter username here.."
            />
          </label>
        </FormGroup>
        <FormGroup>
          <Errors>{errors.password}</Errors>
          <label>
            Password&nbsp;
            <input
              type="password"
              value={values.password}
              onChange={onChange}
              name="password"
              placeholder="enter password here.."
            />
          </label>
        </FormGroup>
        <FormGroup>
          <Errors>{errors.role}</Errors>
          <label>
            Role&nbsp;
            <select value={values.role} name="role" onChange={onChange}>
              <option value="">-- Select a Role --</option>
              <option value="Owner">Owner</option>
              <option value="Renter">Renter</option>
            </select>
          </label>
        </FormGroup>
        <div className="submit">
          <button disabled={disabled}>Submit</button>
        </div>
      </NewUserContainer>
    </StyleForm>
  );
}
const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
  };
};
export default connect(mapStateToProps, {})(NewUserForm);
