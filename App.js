import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Consultar from './pages/Consultar';
import Registrar from './pages/Registrar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Consultar" component={Consultar}></Stack.Screen>
        <Stack.Screen name="Registrar" component={Registrar}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}