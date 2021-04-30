import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../../Actions/TechStuffActions';
import styled from 'styled-components';

const AddEquipmentContainer = styled.div`
  padding: 30px;
  width: 35%;
  margin-left:3%;
  margin-top: 2%;
  font-family: 'Fira Sans Condensed', sans-serif;
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

  h1 {
    color: white;
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
    width: 160px;

    &:hover {
      background-image: linear-gradient(to bottom, #fe4880, #ffce00);
    }
  }
`;

const StyleForm = styled.form`
  padding-top:40px;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 4px;
  box-shadow: 0px 1px 6px 2px rgb(128, 127, 127);
  display: block;
  position: relative;
  background-image: linear-gradient(to bottom right, #000000, #ffffff);
  height:90vh;

`;

const FormGroup = styled.div`
  display: block;
  width: 300px;
  margin-bottom: 18%;

  label {
    display: block;
    color: white;
    font-size: 1.2rem;
    margin-bottom: 10%;
    transition: 0.4s;
  }

  &:focus-within label {
    color: #fe4880;
  }

  input {
    display: block;
    padding: 10px 15px;
    background-color: #f8f8f8;
    border-radius: 8px;
    transition: 0.4s;
    width:440px;
    margin-top:2%;

    &:focus {
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Errors = styled.div`
  color: red;
`;

function AddEquipmentForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
      <StyleForm onSubmit={onSubmit}>
        <AddEquipmentContainer>
            <h1>ADD A NEW ITEM</h1>  
            <Errors>
            <div>{errors.name}</div>
            <div>{errors.description}</div>
            <div>{errors.imgUrl}</div>
            </Errors>
            <FormGroup>
            <label>
                Product Name
                <input
                value={values.name}
                onChange={onChange}
                name="name"
                type="text"
                />
            </label>
            </FormGroup>
            <FormGroup>
            <label>
                Description
                <input
                value={values.description}
                onChange={onChange}
                name="description"
                type="text"
                />
            </label>
            </FormGroup>
            <FormGroup>
            <label>
                Add Image
                <input
                value={values.imgUrl}
                onChange={onChange}
                name="imgUrl"
                type="text"
                />
            </label>
            </FormGroup>
            <div>
            <button disabled={disabled}>submit</button>
            </div>
        </AddEquipmentContainer>
      </StyleForm>          

  );
}

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};
export default connect(mapStateToProps, { addFeature })(AddEquipmentForm);
