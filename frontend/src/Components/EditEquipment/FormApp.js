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

  // STYLES //

  const BodyStyles = styled.div`
    background-color: #53565A;
    height: 100vh;
  `


  return (
    <BodyStyles>
      <Form
        values={formValues}
        update={inputChange}
        submit={updateSubmit}
        disabled={disabled}
        errors={formErrors}
        equipment={props.equipment}
      />
    </BodyStyles>
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
