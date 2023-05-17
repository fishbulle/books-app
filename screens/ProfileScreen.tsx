import { Keyboard, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { Header } from "../components/Header";

function ProfileScreen() {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
            <View style={styles.container}>
                <Header />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f2eb'
    }
})

export default ProfileScreen