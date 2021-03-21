import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import TabBottomNavigator from '../components/TabNavigator';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Courses" component={TabBottomNavigator} />
  </Stack.Navigator>
);

export default Routes;
