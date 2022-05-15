import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../utils/Colors';
import HomeDashboard from './HomeDashboard';
import AllListScreen from './AllListScreen';
import CreateListScreen from './CreateListScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTab() {
  return (
      <Tab.Navigator
      initialRouteName={'home'}
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: COLORS.appGreen,
          inactiveTintColor: COLORS.grayText,
          labelStyle: {fontSize: 16,fontWeight:"800" },
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
        component={AllListScreen} />
     
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
      <Stack.Screen name="CreateList" component={CreateListScreen} />

    </Stack.Navigator>
  );
}

export default HomeStack;