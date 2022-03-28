import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';

test('click function is called', () => {
  const fn = jest.fn();
  render(<Button onClick={fn} />);
  fireEvent.click(screen.getByText(/hello/i));
  expect(fn).toHaveBeenCalledTimes(1);
});
