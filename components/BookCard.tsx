import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { books } from './Books'
import { MyButton } from './MyButton'

// knapp(MyButton) för att visa mer info i en modal

export function BookCard() {
    const addBook = () => {
        console.log('Book added to your library')        
    }

    return (
        <ScrollView>
            <SafeAreaView>
                {books.map(b =>
                    <View style={[styles.container, styles.elevation]} key={b.id}>
                        <Image style={styles.img} source={b.cover} />
                        <Text style={styles.title}>{b.title}</Text>
                        <Text style={styles.author}>by {b.author}</Text>
                        {/* <Text>Blurb here</Text> */}
                        {/* text här ska vara knapp med länk till modal med mer info om boken */}
                        {/* möjlighet att lägga till bok till sitt bibiliotek? */}
                        <MyButton 
                        title={'ADD TO LIBRARY'} 
                        handlePress={addBook}
                        style={styles.buttonText} />
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
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 20,
        paddingTop: 22,
        borderRadius: 30
    },
    elevation: {
        elevation: 10,
        shadowColor: '#333333',
    },
    img: {
        height: 240,
        width: 150,
        borderRadius: 5,
        
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
        paddingBottom: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 12
    }
})