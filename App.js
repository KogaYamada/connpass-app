// dependencies
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createTabNavigator,
} from 'react-navigation-tabs';

//screens
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
import EventCreateScreen from './src/screens/EventCreateScreen';
import ReservedFrame from './src/components/ReservedFrame';

//contexts
import { Provider as AuthProvider } from './src/context/AuthContext';

// icons
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const BottomTabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#0a0a0a',
    showLabel: true,
    style: {
      height: 60,
      paddingVertical: 5,
    },
  },
};

const navigator = createSwitchNavigator({
  LoginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createStackNavigator(
    {
      Connpass: createBottomTabNavigator(
        {
          Home: {
            screen: EventScreen,
            navigationOptions: () => ({
              title: 'マイイベント',
              tabBarIcon: ({ tintColor }) => {
                return (
                  <MaterialIcons
                    name="event-available"
                    color={tintColor}
                    size={24}
                  />
                );
              },
            }),
          },
          Search: {
            screen: EventFormScreen,
            navigationOptions: () => ({
              title: 'イベント検索',
              tabBarIcon: ({ tintColor }) => {
                return (
                  <MaterialCommunityIcons
                    name="calendar-search"
                    color={tintColor}
                    size={24}
                  />
                );
              },
            }),
          },
          Massage: {
            screen: MessageListScreen,
            navigationOptions: () => ({
              title: 'メッセージ',
              tabBarIcon: ({ tintColor }) => {
                return (
                  <AntDesign name="message1" color={tintColor} size={24} />
                );
              },
            }),
          },
          MyPage: {
            screen: MyPageScreen,
            navigationOptions: () => ({
              title: 'マイページ',
              tabBarIcon: ({ tintColor }) => {
                return (
                  <FontAwesome5 name="user-alt" color={tintColor} size={24} />
                );
              },
            }),
          },
        },
        BottomTabNavigatorConfig
      ),
      MessageDetail: MessageDetailScreen,
      ProfileSettings: ProfileSettingsScreen,
      Settings: SettingsScreen,
      Notification: NotificationScreen,
    },
    {
      defaultNavigationOptions: {
        headerBackTitle: 'Back',
      },
    }
  ),
});

const App = createAppContainer(navigator);

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
