import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Courses from '../../screens/Courses';

const TabNavigator = createBottomTabNavigator();

const TabBottomNavigator: React.FC = () => (
  <TabNavigator.Navigator>
    <TabNavigator.Screen name="Courses" component={Courses} />
  </TabNavigator.Navigator>
);

export default TabBottomNavigator;
