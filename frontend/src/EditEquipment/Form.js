import React from 'react';


export default function Form (props) {

        const { values, update, submit, disabled, errors } = props;

        const onChange = evt => {
            const { name, value } = evt.target;
            update(name, value);
        }

        const onSubmit = evt => {
            evt.preventDefault();
            submit();
        }

    return (
        <div>
            <h2>Edit Equipment:</h2>
            <div>{errors.name}</div>
            <div>{errors.description}</div>
            <div>{errors.imgUrl}</div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input value={values.name}
                           onChange={onChange}
                           name='name'
                           type='text'
                    />
                </label>
                <label>Description:
                    <input value={values.description}
                           onChange={onChange}
                           name='description'
                           type='text'
                    />
                </label>
                <label>Upload a New Image:
                    <input value={values.imgUrl}
                           onChange={onChange}
                           name='imgUrl'
                           type='url'
                    />
                </label>
                <button disabled={disabled}>Submit</button>
            </form>
        </div>
    )
}