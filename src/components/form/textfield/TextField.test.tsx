import { render, screen } from '@testing-library/react';
import TextFieldComponent from './TextField';

test('renders learn react link', () => {
  render(
    <TextFieldComponent
      handleFn={(value: any): void => console.log(value)}
      label={'input'}
      error={undefined}
    />
  );
  const linkElement = screen.getAllByText('input');
  expect(linkElement).toBeTruthy();
});
