import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

import schema from './addEquipmentFormSchema'
import AddEquipmentForm from './AddEquipmentForm';

const initialFormValues = {
    name: '',
    description: '',
    imgUrl: '',
};

const initialFormErrors = {
    name: '',
    description: '',
    imgUrl: '',
}

const initialEquipment = [];
const initialDisabled = true;

export default function AddEquipmentFormMain() {
    const [equipment, setEquipment] = useState(initialEquipment);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const postNewEquipment = (newEquipment) => {
        axios
            .post("https://use-my-tech-app.herokuapp.com/api/equipment", newEquipment)
            .then((res) => {
                setEquipment([res.data, ...equipment]);
                setFormValues(initialFormValues);
            })
            .catch((err) => {
                console.log(err);
                debugger;
            });
    };

    const inputChange = (name, value) => {

        yup
            .reach(schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: "",
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
    };

    // useEffect(() => {
    //     getEquipment();
    //   }, []);

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
    )
};


