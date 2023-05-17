import { View, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { books } from './Books'
import { MyButton } from './MyButton'
import { Baskerville, BaskervilleBold } from './MyFonts'

export default function BookCard() {
    const addBook = () => {
        console.log('Book added to your library')
        // hitta bok id
        // skicka bok till libraryScreen
        
    }

    const readMore = () => {
        console.log('Here comes a modal')
        // hitta bok id
        // skapa en modal som visar bokens summering
    }

    return (
        <ScrollView>
            <SafeAreaView>
                {books.map(b =>
                    <View style={[styles.container, styles.elevation]} key={b.id}>
                        <View style={styles.bookCoverContainer}>
                            <Image style={styles.img} source={b.cover} />
                        </View>
                        <BaskervilleBold style={styles.title}>{b.title}</BaskervilleBold>
                        <Baskerville style={styles.author}>by {b.author}</Baskerville>
                        <View style={styles.buttonRow}>
                            <MyButton
                                title={'READ MORE'}
                                handlePress={readMore}
                                style={styles.buttonText}
                                buttonStyle={{}} />
                            <MyButton
                                title={'ADD TO LIBRARY'}
                                handlePress={addBook}
                                style={styles.buttonText}
                                buttonStyle={{ backgroundColor: '#765a3d' }} />
                        </View>
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
        borderRadius: 30,
    },
    elevation: {
        elevation: 10,
        shadowColor: '#333333',
    },
    bookCoverContainer: {
        backgroundColor: '#e6e6e6',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 5
    },
    img: {
        height: 240,
        width: 150,
        borderRadius: 5
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 15,
        paddingBottom: 10
    },
    author: {
        fontSize: 18,
        color: '#333',
        paddingBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
    buttonRow: {
        flexDirection: 'row'
    }
})