import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ headerShown: false}}
        initialRouteName='Home'
      >

        <Screen
          name='Home'
          component={Home}
        />

        {/* <Screen
          name='Login'
          component={Login}
        />

        <Screen
          name='Cadastro'
          component={Cadastro}
        /> */}
      </Navigator>
    </NavigationContainer>
  )
}