import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native"
import BookCard from "../components/BookCard"

const HomeScreen = () => {

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
        <View style={styles.container}>
            <Text style={styles.header}>Discover your new favorite book today!</Text>
            <BookCard />
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        paddingTop: 20,
        fontSize: 40,
        fontFamily: 'monospace',
        textAlign: 'center'
    }
})

export default HomeScreen