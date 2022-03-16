import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenHome from './src/screens/ScreenHome';
import ScreenPencarian from './src/screens/ScreenPencarian';

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenHome" screenOptions={{headerShown: false}}>
        <Stack.Screen name="ScreenHome" component={ScreenHome} />
        <Stack.Screen name="ScreenPencarian" component={ScreenPencarian} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;