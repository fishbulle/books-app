import { View, Text, StyleSheet } from "react-native"
import BookCard from "../components/BookCard"

const HomeScreen = () => {

    // komponenter:
    // böcker med info
    // knapp (MyButton) för att visa mer info i en modal
    // lista på genres

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Discover your new favorite book today!</Text>
            <BookCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        fontSize: 40,
        textAlign: 'center'
    }
})

export default HomeScreen