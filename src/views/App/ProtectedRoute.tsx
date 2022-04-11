import React from 'react';

// @ts-ignore
import Userfront from '@userfront/react';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props): JSX.Element => {
  const location = useLocation();
  if (!Userfront.tokens.accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
