import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./components/Registration/Login"
import Login2 from "./components/Registration/Login2"
import SignUp1 from "./components/Registration/SignUp1";
import SignUp2 from "./components/Registration/SignUp2";
import SignUp3 from "./components/Registration/SignUp3";
import MyDrawer from "./navigation/DrawerNavigator";
import DashboardScreen from "./components/screens/DashboardScreen";
import SellerNew from "./components/screens/SellerNew"
import SellerNew2 from "./components/screens/SellerNew2"
import {Text, View, StyleSheet, Button} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp1"       screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Login2" component={Login2}/>
        <Stack.Screen name="SignUp1" component={SignUp1}/>
        <Stack.Screen name="SignUp2" component={SignUp2}/>
        <Stack.Screen name="SignUp3" component={SignUp3}/> 
        <Stack.Screen name="Sell" component={SellerNew2}/>
        <Stack.Screen name="Home" component={DashboardScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
