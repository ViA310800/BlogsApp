import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './compoment/Login';
import HomeScreen from './compoment/Home'
import TrangChu from './compoment/TrangChu';
import Register from './compoment/Register';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator >
       <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} />
       <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TrangChu" component={TrangChu} />
     </Stack.Navigator>
    
    </NavigationContainer>
  );
}
export default App;

// ... other code from the previous section