import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main, Detail, Product} from '../screens';
//import DATA from '../assets/DATA'
const Stack = createNativeStackNavigator();

export default StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};
