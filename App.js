import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './pages/auth.jsx';
import Componet from './pages/index.jsx';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Group>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Home" component={Componet} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
