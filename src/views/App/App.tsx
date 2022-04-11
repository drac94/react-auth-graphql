import React, { lazy, Suspense } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

const AdminView = lazy(() => import('../AdminView'));
const Home = lazy(() => import('../Home'));
const Login = lazy(() => import('../Login'));
const NotFound = lazy(() => import('../NotFound'));

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminView />
            </ProtectedRoute>
          }
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
