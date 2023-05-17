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
        backgroundColor: 'lightpink',
        padding: 8,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20
    }
})