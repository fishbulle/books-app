import { View, Image, SafeAreaView, ScrollView, StyleSheet, Modal } from 'react-native'
import { books } from './book'
import { MyButton } from './MyButton'
import { Baskerville, BaskervilleBold } from './MyFonts'
import { useState } from 'react'

export default function BookCard() {
    const [modalVisible, setModalVisible] = useState(false)
    const [blurb, setBlurb] = useState('')
    const [title, setTitle] = useState('')

    const addBook = () => {
        console.log('Book added to your library... but not really')
    }

    const readMore = (blurb: string, title: string) => {
        setModalVisible(!modalVisible)
        setBlurb(blurb)
        setTitle(title)
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
                                title={'Read More'}
                                handlePress={() => readMore(b.blurb, b.title)}
                                style={styles.buttonText}
                                buttonStyle={{}} />
                            <MyButton
                                title={'Add to library'}
                                handlePress={addBook}
                                style={styles.buttonText}
                                buttonStyle={{ backgroundColor: '#765a3d' }} />
                        </View>
                    </View>
                )}
                <Modal
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}>
                    <View style={[styles.container, styles.elevation]}>
                        <ScrollView>
                            <View style={styles.blurbContainer}>
                                <BaskervilleBold style={styles.title}>{title}</BaskervilleBold>
                                <Baskerville style={styles.blurbText}>
                                    {blurb}
                                </Baskerville>
                            </View>
                        </ScrollView>
                        <MyButton
                            title='Close'
                            style={styles.buttonText}
                            handlePress={() => setModalVisible(!modalVisible)}
                            buttonStyle={{ margin: 10 }} />
                    </View>
                </Modal>
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
        textTransform: 'uppercase'
    },
    buttonRow: {
        flexDirection: 'row'
    },
    blurbContainer: {
        padding: 30
    },
    blurbText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify'
    }
})