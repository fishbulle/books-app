import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { books } from './Books'

// knapp(MyButton) för att visa mer info i en modal

const BookCard = () => {
    return (
        <ScrollView>
            <SafeAreaView>
                {books.map(b =>
                    <View style={styles.container}>
                        <Image source={b.cover} style={styles.img} />
                        <Text style={styles.title}>{b.title}</Text>
                        <Text style={styles.author}>by {b.author}</Text>
                        {/* text här ska vara knapp med länk till modal med mer info om boken */}
                        <Text>Blurb here</Text>
                    </View>
                )}
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 40
    },
    img: {
        height: 240,
        width: 150,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    author: {
        fontSize: 18
    }
})

export default BookCard