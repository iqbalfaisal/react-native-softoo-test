import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BasketScreen, ProductScreen} from '../screens';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Basket" component={BasketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
