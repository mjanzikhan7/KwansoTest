import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../utils/Colors';
import HomeDashboard from './HomeDashboard';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTab() {
  return (
      <Tab.Navigator
      initialRouteName={'HomeDashboard'}
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: COLORS.appGreen,
          inactiveTintColor: COLORS.grayText,
          labelStyle: {fontSize: 12 },
          style: {
            backgroundColor: COLORS.tabBarBackground,
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: 'HOME',
          }} 
        name="home" 
        component={HomeDashboard} />
        
        <Tab.Screen
          options={{
            tabBarLabel: 'All List',
          }} 
        name="allList" 
        component={HomeDashboard} />
     
      </Tab.Navigator>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={'HomeDashboard'}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="HomeDashboard" component={HomeTab} />
    </Stack.Navigator>
  );
}

export default HomeStack;