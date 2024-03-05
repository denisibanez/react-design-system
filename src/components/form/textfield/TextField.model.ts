import { HTMLInputTypeAttribute } from 'react';

interface InputInterface {
  handleFn: (value: string | undefined) => void;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  error: boolean | undefined;
}

export type { InputInterface };
