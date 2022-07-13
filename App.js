import * as React from 'react';
import { View,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsStackScreen from './src/StackScreens/SettingsStackScreen'
import HomeStackScreen from './src/StackScreens/HomeStackScreen'
import MenuStackScreen from './src/StackScreens/MenuStackScreen'
import CartStackScreen from './src/StackScreens/CartStackScreen'
import BookStackScreen from './src/StackScreens/BookStackScreen'

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator   screenOptions={{ headerShown: false, activeTintColor:"tomato",
      inactiveTintColor:"grey" }}>
      <Tab.Screen name="Home" component={HomeStackScreen} 
     options={{
      
       tabBarIcon:({focused})=>(
         <View style={{alignItems:"center",justifyContent:"center" }}>
        <Image
        source={require('./src/assets/icons/icons8-home-page-64.png')}
        resizeMode='contain'
        style={{
          width:25,
          height:25,
          tintColor:focused ? "tomato":"#748c94",
        }}/>
       </View>
       )
     }}
      />
      <Tab.Screen name="Menu" component={MenuStackScreen} 
      options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:"center",justifyContent:"center" }}>
         <Image
         source={require('./src/assets/icons/icons8-dining-room-50.png')}
         resizeMode='contain'
         style={{
           width:25,
           height:25,
           tintColor:focused ? "tomato":"#748c94",
         }}/>        
        </View>
        )
      }}
      />
      <Tab.Screen name="Card" component={CartStackScreen} 
      options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:"center",justifyContent:"center" }}>
         <Image
         source={require('./src/assets/icons/icons8-shopping-cart-30.png')}
         resizeMode='contain'
         style={{
           width:25,
           height:25,
           tintColor:focused ? "tomato":"#748c94",
         }}/>
        </View>
        )
      }}
       />
      <Tab.Screen name="Book" component={BookStackScreen} 
       options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:"center",justifyContent:"center" }}>
         <Image
         source={require('./src/assets/icons/icons8-reading-50.png')}
         resizeMode='contain'
         style={{
           width:25,
           height:25,
           tintColor:focused ? "tomato":"#748c94",
         }}/>
        </View>
        )
      }}
      />
      <Tab.Screen name="More" component={SettingsStackScreen}
        options={{
          tabBarIcon:({focused})=>(
            <View style={{alignItems:"center",justifyContent:"center" }}>
           <Image
           source={require('./src/assets/icons/icons8-menu-vertical-48.png')}
           resizeMode='contain'
           style={{
             width:25,
             height:25,
             tintColor:focused ? "tomato":"#748c94",
           }}/>
          </View>
          )
        }}
      />
     
    </Tab.Navigator>
 
    </NavigationContainer>
  );
}