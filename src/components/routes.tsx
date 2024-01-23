import ClientScreen from '@/screens/clients'
import CreateClientsScreen from '@/screens/create-clients'
import LoginScreen from '@/screens/login'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator:
          CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />

      <Stack.Screen
        name='Client'
        component={ClientScreen}
      />

      <Stack.Screen
        name='CreateClients'
        component={CreateClientsScreen}
      />
    </Stack.Navigator>
  )
}
