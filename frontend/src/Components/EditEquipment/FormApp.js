import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../axiosWithAuth';
import * as yup from 'yup';
import Form from './Form';
// import './App.css';
import schema from './FormSchema';
import { connect } from 'react-redux';
import editedFeature from '../../Actions/TechStuffActions';

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

function FormApp() {
  const [item, setItem] = useState(initialItem);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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
      .post('/api/equipment', itemToBeUpdated)
      //This URL will need to be changed once authorization is completed, currently it just adds new Equipment instead of updating already existing equipment.
      .then((res) => {
        console.log(res);
        setItem([res.data, ...item]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateSubmit = () => {
    const itemToBeUpdated = {
      name: formValues.name.trim(),
      description: formValues.description.trim(),
      imgUrl: formValues.imgUrl.trim(),
    };
    // updateItem(itemToBeUpdated);
    props.editedFeature(itemToBeUpdated);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      //Setting up disabled submit button
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <h1>Update your Listing:</h1>
      <Form
        values={formValues}
        update={inputChange}
        submit={updateSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    name: state.name,
    description: state.description,
    imgUrl: state.imgUrl,
  };
};
export default connect(mapStateToProps, {})(FormApp);
