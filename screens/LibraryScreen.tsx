import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native"
import { Header } from "../components/Header"

function LibraryScreen() {
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

export default LibraryScreen