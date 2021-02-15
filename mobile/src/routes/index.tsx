import React from 'react';

import { useAuth } from '../hooks/auth';
import AppRoutes from './app.routes';
import Splash from '../pages/Splash';

const Routes: React.FC = () => {
  const { loading } = useAuth();

  if (loading) return <Splash />;

  return <AppRoutes />;
};

export default Routes;
