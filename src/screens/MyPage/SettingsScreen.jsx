import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SettingsScreen = ({ navigation }) => {
  const firstBlock = [
    {
      id: 1,
      title: 'パスワードの変更',
      route: 'ChangePass',
    },
    {
      id: 2,
      title: 'メールアドレスの変更',
      route: 'ChangeEmail',
    },
    {
      id: 3,
      title: 'メールアドレスの登録',
      route: 'RegistrationEmail',
    },
    {
      id: 4,
      title: 'アカウント連携',
      route: 'LinkAccounts',
    },
  ];

  const secondBlock = [
    {
      id: 5,
      title: 'ヘルプセンター',
      route: 'HelpCenter',
    },
    {
      id: 6,
      title: 'ログアウト',
    },
  ];

  return (
    <Container>
      <Content>
        <List>
          <ListItem itemDivider style={styles.items}>
            <Text style={styles.dividerText}>アカウント</Text>
          </ListItem>
          {firstBlock.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate(item.route)}>
              <ListItem style={styles.Items}>
                <Text key={item.id}>{item.title}</Text>
                <Ionicons name="ios-arrow-forward" size={20} color="black" />
              </ListItem>
            </TouchableOpacity>
          ))}
          <ListItem itemDivider style={styles.items}>
            <Text style={styles.dividerText}>設定</Text>
          </ListItem>
          {secondBlock.map((item) =>
            item.title !== 'ログアウト' ? (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate(item.route)}>
                <ListItem style={styles.Items}>
                  <Text key={item.id}>{item.title}</Text>
                  <Ionicons name="ios-arrow-forward" size={20} color="black" />
                </ListItem>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity key={item.id}>
                <ListItem style={styles.logOut}>
                  <Text key={item.id} style={styles.logOutText}>
                    {item.title}
                  </Text>
                </ListItem>
              </TouchableOpacity>
            )
          )}
        </List>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  dividerText: {
    fontSize: 20,
    paddingVertical: '1%',
  },
  Items: {
    justifyContent: 'space-between',
    marginLeft: 0,
    paddingLeft: 18,
  },
  logOut: {
    justifyContent: 'space-around',
    marginLeft: 0,
    paddingLeft: 18,
    // ↑left以外はデフォルトでついてる
  },
  logOutText: {
    color: 'red',
  },
});

export default SettingsScreen;
