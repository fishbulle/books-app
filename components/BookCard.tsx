import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { books } from './Books'

// knapp(MyButton) för att visa mer info i en modal

const BookCard = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                {books.map(b =>
                    <View style={styles.container}>
                        <Image source={b.cover} style={styles.img} />
                        <Text>{b.title}</Text>
                        <Text>{b.author}</Text>
                        <Text>{b.blurb}</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        flex: 1,
        height: 250,
        width: 150,
        
    },
    title: {
        flex: 1
    },
    author: {
        flex: 1
    },
    blurb: {
        flex: 1
    }
})

export default BookCard