import 'react-native-gesture-handler'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useCallback } from 'react'
import Providers from './src/components/providers'
import StackNavigation from './src/components/routes'

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <Providers>
      <SafeAreaView
        style={{ flex: 1 }}
        onLayout={onLayoutRootView}
      >
        <StackNavigation />

        <StatusBar style='auto' />
      </SafeAreaView>
    </Providers>
  )
}
