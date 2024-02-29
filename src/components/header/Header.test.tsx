import { render, screen } from '@testing-library/react';
import HeaderComponent from './Header';

test('renders learn react link', () => {
  render(
    <HeaderComponent menuItems={[]} appName={'app'} buttonLabel={'label'} />
  );
  const linkElement = screen.getByTestId('header-ds');
  expect(linkElement).toBeTruthy();
});
