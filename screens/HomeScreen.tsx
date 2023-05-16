import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native"
import BookCard from "../components/BookCard"
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync()

const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
        'Paperkind': require('../assets/fonts/Paperkind.otf'),
        'Love': require('../assets/fonts/Love.ttf'),
        'Cherolina': require('../assets/fonts/Cherolina.otf')
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
            <View>
                <Text style={styles.header}>Book Finder</Text>
            </View>
            <BookCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        paddingTop: 20,
        fontSize: 50,
        fontFamily: 'Paperkind',
        textAlign: 'center'
    }
})

export default HomeScreen