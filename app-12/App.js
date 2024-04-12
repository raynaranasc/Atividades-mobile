import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Banco from './src/Banco/index';
import Resultado from './src/Resultado/index';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Banco" component={Banco} />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}