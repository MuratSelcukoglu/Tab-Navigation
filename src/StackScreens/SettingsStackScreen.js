import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailScreen from '../screen/DetailScreen'
import SettingScreen from '../screen/SettingScreen'

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingScreen} />
      <SettingsStack.Screen name="Details" component={DetailScreen} />
    </SettingsStack.Navigator>
  );
}