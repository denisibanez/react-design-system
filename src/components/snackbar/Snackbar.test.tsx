import { render, screen } from '@testing-library/react';
import SnackbarComponent from './Snackbar';

test('renders learn react link', () => {
  render(
    <SnackbarComponent model={true} closeSnackbar={() => {}} message={''} />
  );
  const linkElement = screen.getByTestId('snackbar-ds');
  expect(linkElement).toBeTruthy();
});
