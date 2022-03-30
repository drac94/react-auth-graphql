import React from 'react';

import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import './index.css';
import { client } from './apolloConfig';
import browserHistory from './browserHistory';
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './userContext';
import App from './views/App';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HistoryRouter history={browserHistory}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </HistoryRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
