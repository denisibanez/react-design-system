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
}) => {
  return (
    <>
      <TextField  label={label} variant="outlined" onChange={({ target: { value } }) => handleFn(value)} />
    </>
  );
};
export default TextFieldComponent;
