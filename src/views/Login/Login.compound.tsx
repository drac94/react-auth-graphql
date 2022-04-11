import React from 'react';

// @ts-ignore
import Userfront from '@userfront/react';

const LoginForm = Userfront.build({
  toolId: 'adnmol',
});

const LoginCompound = (): JSX.Element => {
  return <LoginForm />;
};

export default LoginCompound;
