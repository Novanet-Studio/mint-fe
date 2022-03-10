import { render, screen } from '@testing-library/react';
import ListedCardPage from './ListedCardPage';

test('renders learn react link', () => {
  render(<ListedCardPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
