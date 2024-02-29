import { render, screen } from '@testing-library/react';
import LoaderComponent from './Loader';

test('renders learn react link', () => {
  render(<LoaderComponent />);
  const linkElement = screen.getByTestId('loading');
  expect(linkElement).toBeTruthy();
});
