import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { axiosWithAuth } from '../../axiosWithAuth';
import schema from './addEquipmentFormSchema';
import AddEquipmentForm from './AddEquipmentForm';
import { addFeature } from '../../Actions/TechStuffActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const initialFormValues = {
  name: '',
  description: '',
  imgUrl: '',
};

const initialFormErrors = {
  name: '',
  description: '',
  imgUrl: '',
};

const initialEquipment = [];
const initialDisabled = true;

function AddEquipmentFormMain(props) {
  const [equipment, setEquipment] = useState(initialEquipment);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  
  const { push } = useHistory();
  const postNewEquipment = (newEquipment) => {
    axiosWithAuth()
      .post('/api/equipment', newEquipment)
      .then((res) => {
        console.log(res);
        setEquipment([res.data, ...equipment]);
        setFormValues(initialFormValues);
        push('/owner');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newEquipment = {
      name: formValues.name.trim(),
      imgUrl: formValues.imgUrl.trim(),
      description: formValues.description.trim(),
    };
    postNewEquipment(newEquipment);
    props.addFeature(newEquipment);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <AddEquipmentForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}
export default connect(null, { addFeature })(AddEquipmentFormMain);
