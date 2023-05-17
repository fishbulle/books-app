import { View, Text, StyleSheet } from "react-native"
import BookCard from "../components/BookCard"
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync()

const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
        'Paperkind': require('../assets/fonts/Paperkind.otf'),
        'Love': require('../assets/fonts/Love.ttf'),
        'Cherolina': require('../assets/fonts/Cherolina.otf'),
        'Halimun': require('../assets/fonts/Halimun.ttf'),
        'Champagne': require('../assets/fonts/Champagne.ttf'),
        'RoyalWedding': require('../assets/fonts/RoyalWedding.otf')
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
                <Text style={styles.smallHeader}>find your next read!</Text>
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
        fontSize: 45,
        fontFamily: 'Paperkind',
        color: '#333'
    },
    smallHeader: {
        fontFamily: 'Cherolina',
        fontSize: 40,
        textAlign: 'center',
        color: '#333',
        paddingBottom: 15
    }
})

export default HomeScreen