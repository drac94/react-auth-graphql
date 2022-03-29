import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { isAuthenticated } from '../../auth';

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props): JSX.Element => {
  const location = useLocation();
  if (isAuthenticated()) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
