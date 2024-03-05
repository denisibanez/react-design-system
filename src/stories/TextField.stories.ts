import type { Meta, StoryObj } from '@storybook/react';

import TextFieldComponent from '../components/form/textfield/TextField';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/form/TextField',
  component: TextFieldComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    handleFn: () => console.log('TextField'),
  },
} satisfies Meta<typeof TextFieldComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    handleFn: (value) => console.log(value),
    label: 'Label',
    type: 'text',
    placeholder: 'placeholder',
    error: false,
  },
};
