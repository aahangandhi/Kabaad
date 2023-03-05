import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from "../components/screens/DashboardScreen";
import SellerNew from "../components/screens/SellerNew";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
     
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={DashboardScreen}  />
        <Drawer.Screen name="SellerNew" component={SellerNew} />
      </Drawer.Navigator>
    
  );
}

export default MyDrawer;