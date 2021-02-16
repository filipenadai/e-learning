import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Presentation from '../pages/Presentation';
import SignIn from '../pages/SignIn';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Presentation" component={Presentation} />
    <App.Screen name="SignIn" component={SignIn} />
  </App.Navigator>
);

export default AppRoutes;
