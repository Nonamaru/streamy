import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {useNavigation} from '@react-navigation/native';
import Auth from './auth.jsx';
import Componet from './home.jsx';

const Stack = createNativeStackNavigator();

export default function Main() {
  
  let isLogin = localStorage.getItem('jwt');
  if(isLogin == null){
    isLogin = 'Auth';
  } else {
    isLogin = 'Home';
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{headerShown: false}}
          initialRouteName={isLogin}
        >
          <Stack.Group>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Home" component={Componet} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}