import { View, StyleSheet } from "react-native"
import BookCard from "../components/BookCard"
import { Header } from "../components/Header";

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <BookCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f2eb',
        paddingTop: 40
    }
})

export default HomeScreen