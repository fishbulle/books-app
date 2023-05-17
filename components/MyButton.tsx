import { Pressable, StyleSheet, Text } from "react-native"

interface ButtonProps {
    title: string,
    style: {},
    handlePress(): void
}

export const MyButton = ({ handlePress, title, style}: ButtonProps) => {
    return (
        <Pressable style={[styles.pressable]} onPress={handlePress}>
            <Text style={style}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: '#bd9f7f',
        paddingTop: 5,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        marginBottom: 20,
        borderRadius: 20
    }
})