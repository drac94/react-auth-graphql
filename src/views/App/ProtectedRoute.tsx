import React from 'react';

import Userfront from '@userfront/core';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
  children: JSX.Element;
  allowedRoles?: string[];
};

const ProtectedRoute = ({ children, allowedRoles }: Props): JSX.Element => {
  const location = useLocation();
  if (!Userfront.tokens.accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (
    allowedRoles &&
    !allowedRoles.some((role) => Userfront.user.hasRole?.(role))
  ) {
    return <Navigate to="/404" replace />;
  }
  return children;
};

export default ProtectedRoute;
