import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import BottomNavigation from './src/navigations/bottomNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation/>
    </NavigationContainer>
  );
}