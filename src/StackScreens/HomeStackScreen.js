import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailScreen from '../screen/DetailScreen'
import HomeScreen from '../screen/HomeScreen'

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}