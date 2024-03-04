import { render, screen } from '@testing-library/react';
import TextFieldComponent from './TextField';

test('renders learn react link', () => {
  render(
    <TextFieldComponent
      error={false}
      handleFn={(value: any): void => console.log(value)}
      model={''}
      label={'input'}
    />
  );
  const linkElement = screen.getAllByText('input');
  expect(linkElement).toBeTruthy();
});
