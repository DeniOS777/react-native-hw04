import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { RegistrationScreen } from './src/Screens/RegistrationScreen';
import { LoginScreen } from './src/Screens/LoginScreen';

const fontsMap = {
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
};

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(fontsMap);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  onLayoutRootView();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}
