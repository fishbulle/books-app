import { View, ScrollView, StyleSheet } from "react-native";
import { BaskervilleBold, BaskervilleItalic } from "./MyFonts";
import { books } from "./book";

export default function Genres() {

    return (
        <ScrollView>
            <View style={[styles.container, styles.elevation]}>
                <BaskervilleBold style={styles.header}>Your Most Read Genres</BaskervilleBold>
                <View style={styles.genreContainer}>
                    {books.map(b =>
                        <BaskervilleItalic style={styles.genres} key={b.id}>{b.genre}</BaskervilleItalic>
                    )}
                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 20,
        paddingTop: 20,
        borderRadius: 30,
        width: 340
    },
    elevation: {
        elevation: 10,
        shadowColor: '#333333',
    },
    header: {
        fontSize: 20
    },
    genreContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#e6e6e6',
        margin: 20,
        borderRadius: 10,
    },
    genres: {
        fontSize: 16,
        padding: 5,
        flexBasis: '50%',
        textAlign: 'center'
    }
}) 