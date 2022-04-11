import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { render, screen } from '@testing-library/react';

import { client } from '../../apolloConfig';

import Home from './Home';

test('renders learn react link', () => {
  render(
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
  const headerElement = screen.getByText(/Home/i);
  expect(headerElement).toBeInTheDocument();
});
