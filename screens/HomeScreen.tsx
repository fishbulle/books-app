import { View, Text, StyleSheet } from "react-native"
import BookCard from "../components/BookCard"
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync()

const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
        'Halimun': require('../assets/fonts/Halimun.ttf'),
        'Champagne': require('../assets/fonts/Champagne.ttf'),
        'ChampagneBold': require('../assets/fonts/ChampagneBold.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Book Heaven</Text>
                <Text style={styles.smallHeader}>find your next read</Text>
            </View>
            <BookCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f2eb'
    },
    headerContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#ece1d5',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 10,
        fontSize: 50,
        fontFamily: 'ChampagneBold',
        textTransform: 'uppercase',
        color: '#333'
    },
    smallHeader: {
        fontFamily: 'Halimun',
        // textTransform: 'uppercase',
        fontSize: 20,
        textAlign: 'center',
        color: '#333',
        paddingBottom: 15
    }
})

export default HomeScreen