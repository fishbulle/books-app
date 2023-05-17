import { Pressable, StyleSheet, Text } from "react-native"

interface ButtonProps {
    title: string,
    style: {},
    buttonStyle: {},
    handlePress(): void
}

export const MyButton = ({ handlePress, title, style, buttonStyle }: ButtonProps) => {
    return (
        <Pressable 
        style={[styles.pressable, buttonStyle]} 
        onPress={handlePress}
        android_ripple={{ color: '#fff' }}>
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
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20
    }
})