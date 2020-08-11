import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';


export default SocialButton_component = (props) => {
    const RenderButton = () => {

        if (props.ButtonType === 'twitter') {
            return (
                <Button
                    buttonStyle={styles.socialButton}
                    titleStyle={styles.socialButtonTitle}
                    title="Twitterで登録/ログイン"
                    type="outline"
                    onPress={() => { console.log("Twitterでログインしますよ") }}
                />
            )
        } else if (props.ButtonType === 'facebook') {
            return (
                <Button
                    buttonStyle={styles.socialButton}
                    titleStyle={styles.socialButtonTitle}
                    title="Facebookで登録/ログイン"
                    type="outline"
                    onPress={()=>{console.log("FaceBookでログインしますよ")}}
                />
            )
        } else {
            return (
                <Button
                    buttonStyle={styles.socialButton}
                    titleStyle={styles.socialButtonTitle}
                    title="Githubで登録/ログイン"
                    type="outline"
                    onPress={() => { console.log("GitHubでログインしますよ") }}
                />
            )
        }
    }
    return (
        <View>
            <RenderButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    socialButton: {
        borderColor: '#707070',
        backgroundColor:"rgb(230,230,230)",
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
    },
    socialButtonTitle: {
        color: '#000000',
    },
})