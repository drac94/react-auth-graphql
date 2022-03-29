import React from 'react';

import { ApolloError } from '@apollo/client';

type FormElements = {
  emailInput: HTMLInputElement;
  passwordInput: HTMLInputElement;
} & HTMLFormControlsCollection;

type LoginFormElement = {
  readonly elements: FormElements;
} & HTMLFormElement;

type Props = {
  error?: ApolloError;
  loading: boolean;
  onLogin: (email: string, password: string) => void;
};

const Login = ({ error, loading, onLogin }: Props): JSX.Element => {
  const handleSubmit = (event: React.FormEvent<LoginFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.elements.emailInput.value;
    const password = event.currentTarget.elements.passwordInput.value;
    onLogin(email, password);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input id="emailInput" type="email" required />
          <input id="passwordInput" type="password" required />
          <button type="submit">Log in</button>
        </form>
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
};

export default Login;
