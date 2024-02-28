import type { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import SnackbarComponent from '../components/snackbar/Snackbar';
import { SnackbarInterfaceProps } from '../components/snackbar/Snackbar.model';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Snackbar',
  component: SnackbarComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} as Meta;

export const Default: Story = (args: SnackbarInterfaceProps) => {
  const [model, setModel] = useState(true);
  return <SnackbarComponent {...args} model={model} closeSnackbar={setModel} />;
};
Default.args = {
  model: false,
  message: 'This is a success Alert inside a Snackbar!',
  duration: 6000,
  severity: 'success',
};
