import React from 'react';
import {useLocation, Navigate, useNavigate} from 'react-router-dom';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({children}: RequireAuthProps) => {
  const location = useLocation();
  const auth = false;

  return children;
};