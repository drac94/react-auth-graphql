import React, { useState } from 'react';

import Userfront from '@userfront/core';

import Login from './Login';

const LoginCompound = (): JSX.Element => {
  const [loginError, setLoginError] = useState<string>('');
  const handleOnLogin = (user: string, password: string) => {
    Userfront.login({
      method: 'password',
      emailOrUsername: user,
      password: password,
    }).catch((error) => {
      setLoginError(error.message);
    });
  };
  return <Login onLogin={handleOnLogin} loading={false} error={loginError} />;
};

export default LoginCompound;
