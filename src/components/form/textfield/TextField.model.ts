interface CustomHelperTextInterface {
  value: string;
  customMessage?: string;
}

interface InputInterface {
  error: boolean;
  handleFn: (value: string | undefined) => void;
  model: string;
  label: string;
  customMessage?: string;
}

export type { InputInterface, CustomHelperTextInterface };
