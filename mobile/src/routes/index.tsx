import React, { useEffect, useState } from 'react';

import AppRoutes from './app.routes';
import Splash from '../pages/Splash';

const Routes: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return <AppRoutes />;
};

export default Routes;
