import React from 'react';
// Style
import './TextField.scss';

// Maerial componentes
import { FormHelperText, InputLabel, OutlinedInput } from '@mui/material';

import FormControl, { useFormControl } from '@mui/material/FormControl';

// Types
import { InputInterface, CustomHelperTextInterface } from './TextField.model';

// Custom Validator
const CustomHelperText: React.FC<CustomHelperTextInterface> = ({
  value,
  customMessage,
}) => {
  console.log(useFormControl());
  const { error, required, filled } = useFormControl() || {};
  let message = null;
  const minLen = value?.length < 3;

  if (filled && minLen) {
    message = 'Campo deve ter Mínimo 3 dígitos';
  }

  if (required && !filled) {
    message = 'Campo é obrigatório';
  }

  return (
    <FormHelperText error={error}>
      {customMessage ? customMessage : message}
    </FormHelperText>
  );
};

const TextFieldComponent: React.FC<InputInterface> = ({
  error,
  handleFn,
  model,
  label,
  customMessage,
  required
}) => {
  return (
    <FormControl error={error} required={required}>
      <InputLabel htmlFor="component-outlined">{label}</InputLabel>
      <OutlinedInput onChange={({ target: { value } }) => handleFn(value)} />
      <CustomHelperText value={model} customMessage={customMessage} />
    </FormControl>
  );
};
export default TextFieldComponent;
