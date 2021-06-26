import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function ProtectedRoute(props: RouteProps) {
  const { user } = useAuth();

  if (user) {
    console.log('aqui');
    return <Route {...props} />;
  } else {
    return <Redirect to="/" />;
  }
}
