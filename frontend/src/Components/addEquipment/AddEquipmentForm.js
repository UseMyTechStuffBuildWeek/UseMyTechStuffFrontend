import React from 'react';
import { connect } from react-redux;
import { addFeature } from '../../Actions/TechStuffActions'
import styled from 'styled-components'

export const AddEquipmentContainer = styled.div
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


const StyleForm = styled.form`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 4px;
    box-shadow: 0px 1px 6px 2px rgb(128, 127, 127);
    display:block;
    position:relative;
    background-image: linear-gradient(to bottom right, #FFCE00, #FE4880);


const FormGroup = styled.div
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


const Errors = styled.div 
    color: red;



export const AddEquipmentContainer = ` styled.div
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

const StyleForm = `styled.form
    border: 1px solid rgb(210, 210, 210);
    border-radius: 4px;
    box-shadow: 0px 1px 6px 2px rgb(128, 127, 127);
    display:block;
    position:relative;
    background-image: linear-gradient(to bottom right, #FFCE00, #FE4880);


const FormGroup = styled.div
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
`;

const Errors = `styled.div
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


    return(
        <StyleForm onSubmit={onSubmit}>
            <AddEquipmentContainer>
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
                            name='name'
                            type='text'
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label>
                        Description
                        <input
                            value={values.description}
                            onChange={onChange}
                            name='description'
                            type='text'
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label>
                        Add Image
                        <input
                            value={values.imgUrl}
                            onChange={onChange}
                            name='imgUrl'
                            type='text'
                        />
                    </label>
                </FormGroup>
                <div>
                    <button disabled={disabled}>submit</button>    
                </div>
                
            </AddEquipmentContainer>
        </StyleForm>
)};
       
    const mapStateToProps = (state) => {
        return {
            item: state.item,
    }    

};
export default connect(mapStateToProps, { addFeature })(AddEquipmentForm);
