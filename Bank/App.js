import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home/Home';
import {View} from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator(
//   {
//     Home: Home,
//   },
//   {
//     contentOptions: {
//       activeTintColor: 'red',
//       labelStyle: {
//         fontSize: 20,
//       }
//     }
//   }
// );

// function MyDrawer() {
//   return (
//     <Drawer.Navigator useLegacyImplementation>
//       <Drawer.Screen name="Home" component={Home} />
//     </Drawer.Navigator>
//   );
// }
 

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
        </Stack.Navigator>
      </NavigationContainer>
     
  );
}


