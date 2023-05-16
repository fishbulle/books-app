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
                        <Text>Blurb here</Text>
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
        flex: 2,
        flexWrap: 'wrap',
        maxHeight: 100
    },
    header: {
        fontSize: 40
    },
    img: {
        height: 140,
        width: 50,
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