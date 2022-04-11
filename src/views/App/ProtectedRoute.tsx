import React from 'react';

import Userfront from '@userfront/core';
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
