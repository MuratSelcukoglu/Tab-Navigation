import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartScreen from '../screen/CartScreen'

const CartStack = createNativeStackNavigator();

export default function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Menu" component={CartScreen} />
   
    </CartStack.Navigator>
  );
}