import { View, StyleSheet } from "react-native"
import BookCard from "../components/BookCard"
import { ChampagneBoldFont, ChampagneFont, HalimunFont } from "../components/MyFonts";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ChampagneBoldFont style={styles.header}>Book Heaven</ChampagneBoldFont>
                <HalimunFont style={styles.smallHeader}>find your next read</HalimunFont>
            </View>
            <BookCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f2eb'
    },
    headerContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#ece1d5',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 10,
        fontSize: 50,
        textTransform: 'uppercase',
        color: '#333'
    },
    smallHeader: {
        fontSize: 20,
        textAlign: 'center',
        color: '#333',
        paddingBottom: 15
    }
})

export default HomeScreen