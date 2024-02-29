import type { Meta, StoryObj } from '@storybook/react';

import ButtonComponent from '../components/button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: ButtonComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: 'Label' },
    color: {
      control: { type: 'select' },
      options: [
        'success',
        'inherit',
        'primary',
        'secondary',
        'error',
        'info',
        'warning',
        undefined,
      ],
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'contained', 'outlined', undefined],
    },
    onClick: () => console.log('Button'),
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Label',
    color: 'primary',
    variant: 'contained',
    onClick: () => console.log('Button'),
  },
};
