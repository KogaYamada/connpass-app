import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
                    <Input
                      style={styles.avatarName}
                      placeholder="user name"></Input>
                  </Item>
                </Form>
                <View style={styles.avatarIconView}>
                  <TouchableOpacity>
                    <View style={styles.avatarIcon}>
                      <MaterialCommunityIcons
                        name="camera-plus-outline"
                        size={30}
                        color="black"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.avatarUrlView}>
                <Form>
                  <Label style={styles.label}>リンク</Label>
                  <Item>
                    <Input
                      style={styles.avatarUrl}
                      placeholder="user link"></Input>
                  </Item>
                </Form>
              </View>
            </View>
            <View style={styles.coverImg}>
              <TouchableOpacity>
                <View style={styles.coverImgView}>
                  <MaterialCommunityIcons
                    name="camera-plus-outline"
                    size={20}
                    color="black"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.contentsBottom}>
              <Form>
                <Label style={styles.label}>自己紹介</Label>
                <Textarea rowSpan={8} bordered></Textarea>
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
    backgroundColor: 'white',
  },
  modalHeader: {
    paddingTop: '2%',
    backgroundColor: '#eee',
  },
  contentsTop: {
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
  avatarIconView: {
    borderRadius: 50,
    backgroundColor: 'pink',
    width: 80,
    height: 80,
  },
  avatarIcon: {
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, .3)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
