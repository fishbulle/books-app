import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { books } from './Books'

// knapp(MyButton) för att visa mer info i en modal

const BookCard = () => {
    return (
        <ScrollView>
            <SafeAreaView>
                {books.map(b =>
                    <View style={styles.container} key={b.id}>
                        <Image style={styles.img} source={b.cover} />
                        <Text style={styles.title}>{b.title}</Text>
                        <Text style={styles.author}>by {b.author}</Text>
                        {/* <Text>Blurb here</Text> */}
                        {/* text här ska vara knapp med länk till modal med mer info om boken */}
                        {/* möjlighet att lägga till bok till sitt bibiliotek? */}
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
    row: {
    },
    img: {
        height: 240,
        width: 150
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 15,
        paddingBottom: 5
    },
    author: {
        fontSize: 18,
        paddingBottom: 30
    }
})

export default BookCard