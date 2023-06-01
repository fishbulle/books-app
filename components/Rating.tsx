import { View, StyleSheet, TextInput, Image } from "react-native";
import { BaskervilleBold, ChampagneBoldFont, ChampagneFont } from "./MyFonts";
import { MyButton } from "./MyButton";
import { useState } from "react";
import { books } from "./book";

export default function Rating() {
    const [input, onChangeInput] = useState('')
    const [rating, setRating] = useState('?')

    const onPress = () => {
        console.log("You've rated the book", rating, "/ 5")
        setRating(input)
        onChangeInput('')
    }

    return (
            <View style={[styles.container, styles.elevation]}>
                <BaskervilleBold style={styles.header}>Book of the Day</BaskervilleBold>
                <ChampagneBoldFont style={styles.rating}>My rating  {rating}/5</ChampagneBoldFont>
                <View style={styles.bookCoverContainer}>
                    <Image style={styles.img} source={books[3].cover} />
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
        marginTop: 13,
        letterSpacing: 2
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