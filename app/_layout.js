import { Stack } from 'expo-router';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const onLayoutRootView = useCallback(async () => {
        await SplashScreen.hideAsync();
    }, []);

    return <Stack onLayout={onLayoutRootView} />
}

export default Layout;
