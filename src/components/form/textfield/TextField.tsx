import React from 'react';
// Style
import './TextField.scss';

// Material componentes
import { FormHelperText, TextField } from '@mui/material';

// Types
import { InputInterface } from './TextField.model';

const TextFieldComponent: React.FC<InputInterface> = ({
  handleFn,
  label,
  type = 'text',
  placeholder,
  errorMessage,
  error,
}) => {
  return (
    <>
      <TextField
        type={type}
        label={label}
        variant="outlined"
        placeholder={placeholder}
        error={error}
        onChange={({ target: { value } }) =>
          handleFn ? handleFn(value) : null
        }
      />

      <FormHelperText error={true}>{errorMessage}</FormHelperText>
    </>
  );
};
export default TextFieldComponent;
