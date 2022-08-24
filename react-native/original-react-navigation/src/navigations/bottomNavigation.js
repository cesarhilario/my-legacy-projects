import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { 
    StackANavigation, 
    StackBNavigation, 
    StackCNavigation 
} from './stackNavigation';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Stack A" component={StackANavigation} />
      <Tab.Screen name="Stack B" component={StackBNavigation} />
      <Tab.Screen name="Stack C" component={StackCNavigation} />
    </Tab.Navigator>
  );
}