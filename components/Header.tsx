import { View, StyleSheet } from "react-native"
import { ChampagneBoldFont, HalimunFont } from "./MyFonts"

export const Header = () => {

    return (
        <View style={styles.headerContainer}>
            <ChampagneBoldFont style={styles.header}>Book Heaven</ChampagneBoldFont>
            <HalimunFont style={styles.smallHeader}>find your next read</HalimunFont>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#ece1d5',
        paddingTop: 40
    },
    header: {
        paddingBottom: 10,
        fontSize: 50,
        textTransform: 'uppercase',
        color: '#333'
    },
    smallHeader: {
        fontSize: 20,
        textAlign: 'center',
        color: '#333',
        paddingBottom: 15
    }
})