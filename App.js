import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import EventScreen from './src/screens/EventScreen';
import EventSearch from './src/screens/EventSearch';

const navigator = createStackNavigator(
  {
    Signup: SignupScreen,
    Signin: SigninScreen,
    Event: EventScreen,
    Search: TabsAdvancedExample,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Connpass App',
    },
  }
);

export default createAppContainer(navigator);
