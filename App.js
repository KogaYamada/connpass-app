import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import MyPageScreen from './src/screens/MyPage/MyPageScreen';
import ProfileSettingsScreen from './src/screens/MyPage/ProfileSettingsScreen';
import SettingsScreen from './src/screens/MyPage/SettingsScreen';
import NotificationScreen from './src/screens/MyPage/NotificationScreen';
import MessageListScreen from './src/screens/MessageListScreen';
import MessageDetailScreen from './src/screens/MessageDetailScreen';
import EventScreen from './src/screens/EventScreen';
import EventFormScreen from './src/screens/EventFormScreen';

const navigator = createSwitchNavigator(
  {
  LoginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createStackNavigator({
    subFlow: createBottomTabNavigator({
      Event: EventScreen,
      Search: EventFormScreen,
      MessageList: MessageListScreen,
      MyPage: MyPageScreen,
    }),
    Event: EventScreen,
    Search: EventFormScreen,
    MessageList: MessageListScreen,
    MessageDetail: MessageDetailScreen,
    MyPage: MyPageScreen,
    ProfileSettings: ProfileSettingsScreen,
    Settings: SettingsScreen,
    Notification: NotificationScreen,
  },
  {
    defaultNavigationOptions: {
      title: 'Connpass App',
    },
  }),
  }
)

export default createAppContainer(navigator);
