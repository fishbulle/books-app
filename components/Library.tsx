import { View, SafeAreaView, ScrollView, StyleSheet, TextInput, Image } from "react-native";
import { BaskervilleBold, BaskervilleItalic, ChampagneBoldFont, ChampagneFont } from "./MyFonts";
import { MyButton } from "./MyButton";
import { useState } from "react";
import { books } from "./Books";

export default function Library() {
    const [input, onChangeInput] = useState('')
    const [rating, setRating] = useState('?')

    const onPress = () => {
        console.log("You've rated the book", rating, "/ 5")
        setRating(input)
        onChangeInput('')
    }

    return (
        <ScrollView>
            <SafeAreaView>
                <View style={[styles.container, styles.elevation]}>
                    <BaskervilleBold style={styles.header}>Your Most Read Genres</BaskervilleBold>
                    <View style={styles.genreContainer}>
                        {books.map(b =>
                            <BaskervilleItalic style={styles.genres} key={b.id}>{b.genre}</BaskervilleItalic>
                        )}
                    </View>
                </View>
                <View style={[styles.container, styles.elevation]}>
                    <BaskervilleBold style={styles.header}>Book of the Day</BaskervilleBold>
                    <ChampagneBoldFont style={styles.rating}>My rating  {rating}/5</ChampagneBoldFont>
                    <View style={styles.bookCoverContainer}>
                        <Image style={styles.img} source={require('../assets/icebreaker.jpg')} />
                    </View>
                    <ChampagneFont style={styles.add}>{'What would you rate this book?'}</ChampagneFont>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        placeholder='1, 2, 3, 4 or 5?'
                        placeholderTextColor='gray'
                        value={input}
                        onChangeText={onChangeInput}
                    />
                    <MyButton
                        title={'RATE BOOK'}
                        handlePress={onPress}
                        style={styles.buttonText}
                        buttonStyle={{}} />
                </View>
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
    rating: {
        fontSize: 16,
        textTransform: 'uppercase',
        marginTop: 13
    },
    add: {
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 1,
        paddingTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    },
    input: {
        height: 35,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})