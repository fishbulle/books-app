import { Keyboard, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import Profile from "../components/Profile";

function ProfileScreen() {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
            <View style={styles.container}>
                <Header />
                <Profile />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f2eb',
        paddingTop: 100
    }
})

export default ProfileScreen