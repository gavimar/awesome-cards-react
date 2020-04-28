import React from "react";
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const updateInputValue = (evt) => {
    props.handleInputValue(evt.currentTarget.name,evt.currentTarget.value)
  }
  return (
    <div className={props.section}>
      <label htmlFor={props.name} className={`${props.name} label ${props.darkMode === true ? "dark" : "light"}`}>
        {props.labelName}
        <span className="inputRequired">*</span>
      </label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={updateInputValue}
        required
      />
      <p className="input-error-message hiddenInputMessage">
      Completa los campos obligatorios*
      </p>
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string
}

export default FormInput;