import { render, screen } from '@testing-library/react';
import SnackbarComponent from './Snackbar';

test('renders learn react link', () => {
  render(
    <SnackbarComponent model={false} closeSnackbar={() => {}} message={''} />
  );
  const linkElement = screen.getAllByText('count');
  expect(linkElement).toBeTruthy();
});
