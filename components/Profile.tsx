import { View, Image, StyleSheet, TextInput, FlatList } from 'react-native'
import { Baskerville, BaskervilleBold, ChampagneFont } from './MyFonts'
import { MyButton } from './MyButton'
import { useState } from 'react'
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler'
import List from './List'

export default function Profile() {
    const [text, onChangeText] = useState('')
    const [books, setBooks] = useState<string[]>([])

    const onPress = () => {
        setBooks([...books, text])
        onChangeText('')
    }

    return (
        <SafeAreaView style={[styles.container, styles.elevation]}>
            <ScrollView>
                <View style={styles.profileInfo}>
                    <Image style={styles.img} source={require('../assets/bookworm.jpg')} />
                    <BaskervilleBold style={styles.name}>{'Angelina'}</BaskervilleBold>
                    <Baskerville style={styles.info}>{'Sweden. Fantasy lover.'}</Baskerville>
                </View>
                <View>
                    <ChampagneFont style={styles.add}>{'Your favorite books?'}</ChampagneFont>
                    <TextInput
                        style={styles.input}
                        value={text}
                        placeholder='...'
                        onChangeText={onChangeText}
                    />
                    <MyButton
                        title={'ADD TO LIST'}
                        handlePress={onPress}
                        style={styles.buttonText}
                        buttonStyle={{}} />
                </View>
            </ScrollView>
            <List
            horizontal={false}
            cols={2}
            data={books}
            style={styles.list} />
        </SafeAreaView>
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
    profileInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    img: {
        borderRadius: 100,
        width: 150,
        height: 150
    },
    name: {
        textAlign: 'center',
        fontSize: 22,
        paddingTop: 15,
        paddingBottom: 5
    },
    info: {
        fontSize: 12,
        color: '#333',
        paddingBottom: 15,
    },
    add: {
        fontSize: 16,
        textAlign: 'center'
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
    list: {
        fontSize: 15
    }
})