import { View, ScrollView, StyleSheet, Modal } from 'react-native'
import { MyButton } from './MyButton'

interface Props {
    children: any,
    modalVisible: boolean,
    onRequestClose(): void
}

export const MyModal = ({ children, modalVisible, onRequestClose } : Props) => {


    return (
        <Modal
            visible={modalVisible}
            onRequestClose={onRequestClose}>
            <View style={[styles.container, styles.elevation]}>
                <ScrollView>
                    <View style={styles.blurbContainer}>
                        {children}
                    </View>
                </ScrollView>
                <MyButton
                    title='Close'
                    style={styles.buttonText}
                    handlePress={onRequestClose}
                    buttonStyle={{ margin: 10 }} />
            </View>
        </Modal>
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
    buttonText: {
        color: 'white',
        fontSize: 15,
        textTransform: 'uppercase'
    },
    blurbContainer: {
        padding: 30
    }
})