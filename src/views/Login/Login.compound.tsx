import React from 'react';

import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { User } from '../../types';
import { useUserContext } from '../../userContext';

import Login from './Login';
import { LOGIN } from './Login.query';

type LoginMutationVariables = {
  email: string;
  password: string;
};

type LoginMutationResult = {
  login: {
    user: User;
    token: string;
  };
};

const LoginCompound = (): JSX.Element => {
  const { signIn } = useUserContext();
  const navigate = useNavigate();
  const [login, { error, loading }] = useMutation<
    LoginMutationResult,
    LoginMutationVariables
  >(LOGIN, {
    onCompleted: (data) => {
      const {
        login: { token, user },
      } = data;
      signIn(user, token);
      navigate('/', { replace: true });
    },
    onError: () => {},
  });
  const handleLogin = (email: string, password: string) => {
    login({ variables: { email, password } });
  };
  return <Login onLogin={handleLogin} loading={loading} error={error} />;
};

export default LoginCompound;
