import React from 'react';
// Style
import './TextField.scss';

// Material componentes
import { TextField } from '@mui/material';

// Types
import { InputInterface } from './TextField.model';

const TextFieldComponent: React.FC<InputInterface> = ({
  handleFn,
  label,
  type = 'text',
  placeholder,
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
        onChange={({ target: { value } }) => handleFn(value)}
      />
    </>
  );
};
export default TextFieldComponent;
