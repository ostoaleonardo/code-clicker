import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';
import { Stack } from 'expo-router';

const Layout = () => {
    const [loaded] = useFonts({
        Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
        InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    });

    useEffect(() => {
        if (loaded) {
            // can hide splash screen here
        }
    }, [loaded])

    if (!loaded) {
        return null;
    }

    return (
        <TamaguiProvider config={config}>
            <Stack />
        </TamaguiProvider>
    )
}

export default Layout;
