import { render, screen } from '@testing-library/react';
import Dpc from './Dpc';

test('renders learn react link', () => {
  render(<Dpc />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
