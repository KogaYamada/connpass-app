import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import MyPageScreen from './src/screens/MyPage/MyPageScreen';
import ProfileSettingsScreen from './src/screens/MyPage/ProfileSettingsScreen';
import SettingsScreen from './src/screens/MyPage/SettingsScreen';
import NotificationScreen from './src/screens/MyPage/NotificationScreen';
import MessageListScreen from './src/screens/MessageListScreen';
import MessageDetailScreen from './src/screens/MessageDetailScreen';
import EventScreen from './src/screens/EventScreen';

const navigator = createStackNavigator(
  {
    Signup: SignupScreen,
    Signin: SigninScreen,
    MyPage: MyPageScreen,
    ProfileSettings: ProfileSettingsScreen,
    Settings: SettingsScreen,
    Notification: NotificationScreen,
    MessageList: MessageListScreen,
    MessageDetail: MessageDetailScreen,
    Event: EventScreen,
  },
  {
    initialRouteName: 'Signin',
    defaultNavigationOptions: {
      title: 'Connpass App',
    },
  }
);

export default createAppContainer(navigator);
