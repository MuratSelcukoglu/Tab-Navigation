import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookScreen from '../screen/BookScreen'

const BookStack = createNativeStackNavigator();

export default function BookStackScreen() {
  return (
    <BookStack.Navigator>
      <BookStack.Screen name="Menu" component={BookScreen} />    
    </BookStack.Navigator>
  );
}