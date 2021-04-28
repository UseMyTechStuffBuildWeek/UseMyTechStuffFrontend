import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../../Actions/TechStuffActions';

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
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <div>{errors.name}</div>
          <div>{errors.description}</div>
          <div>{errors.imgUrl}</div>
        </div>
        <label>
          <h3>Product Name</h3>
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>
        <label>
          <h3>Description</h3>
          <input
            value={values.description}
            onChange={onChange}
            name="description"
            type="text"
          />
        </label>
        <label>
          <h3>Add Image</h3>
          <input
            value={values.imgUrl}
            onChange={onChange}
            name="imgUrl"
            type="text"
          />
        </label>
        <div>
          <button disabled={disabled}>submit</button>
        </div>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};
export default connect(mapStateToProps, { addFeature })(AddEquipmentForm);
