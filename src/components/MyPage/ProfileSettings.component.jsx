import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
        <KeyboardAwareScrollView>
          <View style={styles.modalContents}>
            <View style={styles.contentsTop}>
              <View style={styles.avatarView}>
                <Form style={{ width: '60%' }}>
                  <Label style={styles.label}>表示名</Label>
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
                <Form>
                  <Label style={styles.label}>リンク</Label>
                  <Item>
                    <Input style={styles.avatarUrl}>Current User Link</Input>
                  </Item>
                </Form>
              </View>
            </View>
            <View style={styles.coverImg}>
              <TouchableOpacity>
                <View style={styles.coverImgView}>
                  <MaterialCommunityIcons
                    name="camera-plus-outline"
                    size={25}
                    color="black"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.contentsBottom}>
              <Form>
                <Label style={styles.label}>自己紹介</Label>
                <Textarea rowSpan={8} bordered>
                  Current User About
                </Textarea>
              </Form>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    marginTop: '7%',
    borderRadius: 100,
  },
  modalContents: {
    // padding: '10%',
    backgroundColor: 'white',
  },
  modalHeader: {
    paddingTop: '2%',
    backgroundColor: '#eee',
  },
  contentsTop: {
    // height: hp('35%'),
    backgroundColor: 'skyblue',
    padding: '10%',
  },
  avatarView: {
    alignItems: 'center',
    marginBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarName: {
    width: wp('50%'),
    height: hp('7%'),
    fontSize: 17,
  },
  avatarUrl: {
    height: hp('7%'),
    fontSize: 17,
  },
  coverImg: {
    width: 45,
    height: 45,
    top: '-4%',
    left: '72%',
  },
  coverImgView: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  contentsBottom: {
    padding: '10%',
    paddingTop: 0,
  },
  //// Label ////
  label: {
    fontSize: 17,
  },
  ///////////////
});

export default ProfileSettings;
