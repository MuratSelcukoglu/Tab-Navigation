import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailScreen from '../screen/DetailScreen'
import MenuScreen from '../screen/MenuScreen'

const MenuStack = createNativeStackNavigator();

export default function MenuStackScreen() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Menu" component={MenuScreen} />
     
    </MenuStack.Navigator>
  );
}