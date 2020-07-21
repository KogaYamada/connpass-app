import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import {
  Button,
  Form,
  Input,
  Textarea,
  Item,
  Label,
  Container,
  Header,
  Left,
  Right,
} from 'native-base';
import Modal from 'react-native-modal';

const ProfileSettings = ({ isModalVisible, setModalVisible }) => {
  return (
    <Modal isVisible={isModalVisible} style={styles.modal}>
      <Container style={styles.modalContainer}>
        <Header style={styles.modalHeader}>
          <Left style={{ paddingLeft: '2%' }}>
            <Button
              hasText
              transparent
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={{ color: '#333', fontSize: 17, width: 100 }}>
                キャンセル
              </Text>
            </Button>
          </Left>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>
          <Right style={{ paddingRight: '2%' }}>
            <Button
              hasText
              transparent
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={{ color: 'green', fontSize: 17 }}>完了</Text>
            </Button>
          </Right>
        </Header>
        {/* ここから中身 */}
        <View style={styles.modalContents}>
          <View style={styles.myPageTop}>
            <View style={styles.container}>
              <View style={styles.avatarView}>
                <Form>
                  <Label>表示名</Label>
                  <Item>
                    <Input style={styles.avatarName}>Current User Name</Input>
                  </Item>
                </Form>
                <View>
                  <TouchableOpacity>
                    <Avatar
                      rounded
                      icon={{ name: 'user', type: 'font-awesome' }}
                      overlayContainerStyle={{ backgroundColor: 'pink' }}
                      size={90}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.avatarUrlView}>
                <View style={styles.linkView}>
                  <Form>
                    <Label>
                      <Entypo name="link" size={17} color="black" />
                      リンク
                    </Label>
                    <Item>
                      <Input style={styles.avatarUrl}>Current User Link</Input>
                    </Item>
                  </Form>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.myPageBottom}>
            <View style={styles.userAbout}>
              <Form>
                <Label>自己紹介</Label>
                <Textarea rowSpan={5} bordered>
                  Current User About
                </Textarea>
              </Form>
            </View>
          </View>
        </View>
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  modalContents: {
    padding: '10%',
    backgroundColor: 'white',
  },
  modalHeader: {
    paddingTop: '2%',
    backgroundColor: '#eee',
  },
});

export default ProfileSettings;
