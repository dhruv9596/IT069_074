import * as React from 'react';
// import * as Google from 'expo-auth-session/providers/google';
import { useEffect,useState } from 'react';
// import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import Desktop from './src/Desktop';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Desktop" component={Desktop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;