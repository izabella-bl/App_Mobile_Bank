import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home/Home';
import Perfil from './pages/Perfil/Perfil';
import Cadastrar from './pages/Cadastrar/Cadastrar';


const Stack = createStackNavigator();

export default function App() {
  return (
 
      <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
              />
              <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerLeft: null
              }}
              />
              <Stack.Screen
                name="Perfil"
                component={Perfil}
              />
               <Stack.Screen
                name="Cadastrar"
                component={Cadastrar}
              />
        </Stack.Navigator>
      </NavigationContainer>
     
  );
}


