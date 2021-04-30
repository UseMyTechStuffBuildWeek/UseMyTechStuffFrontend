import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../axiosWithAuth';
import * as yup from 'yup';
import Form from './Form';
// import './App.css';
import schema from './FormSchema';
import { connect } from 'react-redux';
import { editFeature } from '../../Actions/TechStuffActions';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const initialFormValues = {
  name: '',
  imgUrl: '',
  description: '',
};

const initialFormErrors = {
  name: '',
  imgUrl: '',
  description: '',
};

const initialItem = [];
const initialDisabled = true;

const BodyStyles = styled.div`
  background-color: #53565A;
  height: 94vh;
`

const ImgStyles = styled.div`
  background-image: url('https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-position: center;
  background-size: cover;
  height: 94vh;
  opacity: 70%;
`


function FormApp(props) {
  const [item, setItem] = useState(initialItem);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const { push } = useHistory();
  const { id } = useParams();

  console.log(id);

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const updateItem = (itemToBeUpdated) => {
    axiosWithAuth()
      .put(`/api/equipment/${id}`, itemToBeUpdated)
      .then((res) => {
        setItem(res.data)
        console.log(itemToBeUpdated);
        push('/owner');
      })
      .catch(err => {
        console.log(err);
      })
  };

  const updateSubmit = () => {
    const itemToBeUpdated = {
      name: formValues.name.trim(),
      description: formValues.description.trim(),
      imgUrl: formValues.imgUrl.trim(),
    };
    updateItem(itemToBeUpdated);
    editFeature(itemToBeUpdated);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      //Setting up disabled submit button
      setDisabled(!valid);
    });
  }, [formValues]);

  
  return (
    <div>
      <BodyStyles>
        <ImgStyles>
        <Form
          values={formValues}
          update={inputChange}
          submit={updateSubmit}
          disabled={disabled}
          errors={formErrors}
          equipment={props.equipment}
        />
        </ImgStyles>
      </BodyStyles>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    description: state.description,
    imgUrl: state.imgUrl,
    equipment: state.equipment,
  };
};
export default connect(mapStateToProps, {})(FormApp);
