import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp1 from '../components/Registration/SignUp1';
import SignUp2 from '../components/Registration/SignUp2';
import SignUp3 from '../components/Registration/SignUp3';
import Login from '../components/Registration/Login';
import Loading from '../LoadingScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp1" component={SignUp1} />
        <Stack.Screen name="Loading" component={Loading} />
      </Stack.Navigator>
    );
};
 
export default StackNavigator;