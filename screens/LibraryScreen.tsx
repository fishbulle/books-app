import { View, StyleSheet, Text } from "react-native"

const MyBooks = () => {

    // komponenter:
    // böcker med info
    // knapp (MyButton) för att visa mer info i en modal
    // lista på mest lästa genres??

    return (
        <View>
            <Text>Your books:</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
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

export default MyBooks