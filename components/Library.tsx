// TODO:
// lista på mest lästa genres
// visa upp nån bok som är "sparad"
// inputfält med rating av bok 1-5

import { View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, Image } from "react-native";
import { BaskervilleBold, ChampagneBoldFont, ChampagneFont } from "./MyFonts";
import { MyButton } from "./MyButton";
import { useState } from "react";

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
                    <Text>Your Most Read Genres</Text>
                </View>
                <View style={[styles.container, styles.elevation]}>
                    <View style={styles.bookCoverContainer}>
                        <Image style={styles.img} source={require('../assets/harrypotter.jpg')} />
                    </View>
                    <ChampagneBoldFont style={styles.rating}>My rating  {rating}/5</ChampagneBoldFont>
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
        marginBottom: 10
    },
    add: {
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 1
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
    },
    listView: {
        flex: 4
    },
    listItems: {
        fontSize: 15,
    }
})