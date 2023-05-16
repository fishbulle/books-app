import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

const ProfileScreen = () => {

    // komponenter:
    // profilbild
    // namn (text)
    // input favoritböcker (med 2 keyboards)

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
        <View></View>
        </TouchableWithoutFeedback>
    )   
}

export default ProfileScreen