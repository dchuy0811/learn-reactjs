import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { control } = form;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
        <TextField
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          error={invalid}
          helperText={error?.message}
          fullWidth
          variant="outlined"
          margin="normal"
          label={label}
          disabled={disabled}
        />
      )}
    ></Controller>
  );
}

export default InputField;
