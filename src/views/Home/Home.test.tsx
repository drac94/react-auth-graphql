import React from 'react';

import { render, screen } from '@testing-library/react';

import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const headerElement = screen.getByText(/Home/i);
  expect(headerElement).toBeInTheDocument();
});
