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
import MessageListScreen from './src/screens/MessageListScreen';
import MessageDetailScreen from './src/screens/MessageDetailScreen';
import EventScreen from './src/screens/EventScreen';
import EventFormScreen from './src/screens/EventFormScreen';
import EventCreateScreen from './src/screens/EventCreateScreen';
import EventDetailScreen from './src/screens/EventDetailScreen';
import EventFrameScreen from './src/screens/EventFrameScreen';
import ReservedFrame from './src/components/ReservedFrame';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import MyPageScreen from './src/screens/MyPage/MyPageScreen';
import SettingsScreen from './src/screens/MyPage/SettingsScreen';
import ChangePassScreen from './src/screens/MyPage/ChangePassScreen';
import ChangeEmailScreen from './src/screens/MyPage/ChangeEmailScreen';
import RegistrationEmailScreen from './src/screens/MyPage/RegistrationEmailScreen';
import LinkAccountsScreen from './src/screens/MyPage/LinkAccountsScreen';
import HelpCenterScreen from './src/screens/MyPage/HelpCenterScreen';
import AuthImport from './src/components-ad/atoms/auth-input.component';

import { setNavigator } from './src/navigationRef';

//contexts
import { Provider as AuthProvider } from './src/context/AuthContext';

// icons
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// なんかFirebaseのエラーが出るので調べたやつインストールした //

// import { decode, encode } from 'base-64';
// if (!global.btoa) {
//   global.btoa = encode;
// }
// if (!global.atob) {
//   global.atob = decode;
// }

///////////////////////////////////////////////////////////

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
  ResolveAuth: ResolveAuthScreen,
  LoginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createStackNavigator(
    // ここから下はボトムタブナビゲーションのページ
    {
      Connpass: createBottomTabNavigator(
        {
          Home: {
            screen: AuthImport,
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
      // ここから下にページを追加していく
      MessageDetail: MessageDetailScreen,
      EventFrame: EventFrameScreen,
      EventCreate: EventCreateScreen,
      EventDetail: EventDetailScreen,
      trackListFlow: createStackNavigator({
        Event: EventFormScreen,
      }),
      Settings: SettingsScreen,
      ChangePass: ChangePassScreen,
      ChangeEmail: ChangeEmailScreen,
      RegistrationEmail: RegistrationEmailScreen,
      LinkAccounts: LinkAccountsScreen,
      HelpCenter: HelpCenterScreen,
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
    <App
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    />
  </AuthProvider>
);
