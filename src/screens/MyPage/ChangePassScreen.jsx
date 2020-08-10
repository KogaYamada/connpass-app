import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Input,
  Icon,
  Item,
  Label,
} from 'native-base';

const PassSettingScreen = () => {
  return (
    <Container>
      <Content>
        <List>
          <ListItem itemDivider />
          {/* <ListItem style={styles.listItems}> */}
            <Item>
              <Input placeholder="Current Password" />
            </Item>
          {/* </ListItem> */}
          <ListItem itemDivider />
          <ListItem>
            <Item>
              <Input placeholder="New Password" />
            </Item>
          </ListItem>
          <ListItem>
            {/* ↓三項演算子で切り替え↓ */}
            <Item error>
              <Input placeholder="Again New Password" />
              <Icon name="close-circle" />
            </Item>
          </ListItem>
          <Label>パスワードが一致しません</Label>
        </List>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 0
  },
});

export default PassSettingScreen;
