import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screen1A from '../screens/StackA/screen1';
import Screen2A from '../screens/StackA/screen2';
import Screen3A from '../screens/StackA/screen3';
import Screen1B from '../screens/StackB/screen1';
import Screen2B from '../screens/StackB/screen2';
import Screen3B from '../screens/StackB/screen3';
import Screen1C from '../screens/StackC/screen1';
import Screen2C from '../screens/StackC/screen2';
import Screen3C from '../screens/StackC/screen3';

const StackA = createStackNavigator();
const StackB = createStackNavigator();
const StackC = createStackNavigator();

export function StackANavigation() {
  return (
    <StackA.Navigator initialRouteName="Tela-1A" screenOptions={{ headerShown: false }}>
      <StackA.Screen name="Tela-1A" component={Screen1A}/>
      <StackA.Screen name="Tela-2A" component={Screen2A}/>
      <StackA.Screen name="Tela-3A" component={Screen3A}/>
    </StackA.Navigator>
  )
}

export function StackBNavigation() {
  return (
    <StackB.Navigator initialRouteName="Tela-1B" screenOptions={{ headerShown: false }}>
      <StackB.Screen name="Tela-1B" component={Screen1B}/>
      <StackB.Screen name="Tela-2B" component={Screen2B}/>
      <StackB.Screen name="Tela-3B" component={Screen3B}/>
    </StackB.Navigator>
  )
}

export function StackCNavigation() {
  return (
    <StackC.Navigator initialRouteName="Tela-1C" screenOptions={{ headerShown: false }}>
      <StackC.Screen name="Tela-1C" component={Screen1C}/>
      <StackC.Screen name="Tela-2C" component={Screen2C}/>
      <StackC.Screen name="Tela-3C" component={Screen3C}/>
    </StackC.Navigator>
  )
}