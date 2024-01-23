import { store } from '@/redux'
import { NavigationContainer } from '@react-navigation/native'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

type Props = {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider
          initialMetrics={initialWindowMetrics}
        >
          {children}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}
