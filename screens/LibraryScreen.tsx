import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native"
import { Header } from "../components/Header"
import Genres from "../components/Genres"
import Rating from "../components/Rating"

function LibraryScreen() {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
            <ScrollView>
                <View style={styles.container}>
                    <Header />
                    <Genres />
                    <Rating />
                </View>
            </ScrollView>
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