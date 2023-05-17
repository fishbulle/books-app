import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

interface Props {
    style: {},
    children: any
}

export const ChampagneFont = ({ style, children }: Props) => {
    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'Champagne': require('../assets/fonts/Champagne.ttf'),
            })

            setFontLoaded(true);
        }

        loadFont()
    }, [])

    if (!fontLoaded) {
        return <Text>Loading...</Text>
    }

    return (
        <Text style={{ ...style, fontFamily: 'Champagne' }}>
            {children}
        </Text>
    )
}

export const ChampagneBoldFont = ({ style, children }: Props) => {
    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'Champagne-Bold': require('../assets/fonts/Champagne-Bold.ttf'),
            })

            setFontLoaded(true);
        }

        loadFont()
    }, [])

    if (!fontLoaded) {
        return <Text>Loading...</Text>
    }

    return (
        <Text style={{ ...style, fontFamily: 'Champagne-Bold' }}>
            {children}
        </Text>
    )
}

export const HalimunFont = ({ style, children }: Props) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'Halimun': require('../assets/fonts/Halimun.ttf'),
            });

            setFontLoaded(true)
        }

        loadFont()
    }, [])

    if (!fontLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <Text style={{ ...style, fontFamily: 'Halimun' }}>
            {children}
        </Text>
    )
}