// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
// import { Avatar } from 'react-native-elements';
// import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
// import ProfileSetting from '../../components/MyPage/ProfileSettings.component';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// const ProfileSettings = ({navigation}) => {
//   return (
//     <KeyboardAwareScrollView>
//       <ScrollView>
//         <View style={styles.avatarView}>
//           <TouchableOpacity style={{ padding: 4 }}>
//             <Avatar
//               rounded
//               icon={{ name: 'user', type: 'font-awesome' }}
//               overlayContainerStyle={{ backgroundColor: 'pink' }}
//               size={110}
//               showAccessory
//             />
//           </TouchableOpacity>
//         </View>
//         <ProfileSetting />
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('MyPage')}>
//             <Text style={styles.cancelText}>キャンセル</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.saveButton}>
//             <Text style={styles.saveText}>保存</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAwareScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   avatarView: {
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   cancelButton: {
//     marginRight: 40,
//     alignItems: 'center',
//     backgroundColor: '#ee4400',
//     width: 130,
//     height: 40,
//     // flexDirection: 'row',
//     paddingVertical: 10,
//     justifyContent: 'center',
//     borderRadius: 5,
//   },
//   cancelText: {
//     color: '#eee',
//     fontSize: 17,
//   },
//   saveButton: {
//     alignItems: 'center',
//     backgroundColor: '#44cc00',
//     width: 130,
//     height: 40,
//     justifyContent: 'center',
//     borderRadius: 5,
//   },
//   saveText: {
//     color: '#eee',
//     fontSize: 17,
//   },
// });

// export default ProfileSettings;
