import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import MessageListScreen from './src/screens/MessageListScreen';
import MessageDetailScreen from './src/screens/MessageDetailScreen';
import EventScreen from './src/screens/EventScreen';


const navigator = createStackNavigator(
  {
    Signup: SignupScreen,
    Signin: SigninScreen,
    MessageList: MessageListScreen,
    MessageDetail: MessageDetailScreen,
    Event: EventScreen,
  },
  {
    initialRouteName: 'Signup',
    defaultNavigationOptions: {
      title: 'Connpass App',
    },
  }
);

export default createAppContainer(navigator);
