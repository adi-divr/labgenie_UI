import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../../src/screen/Home";
import Login from "../../src/screen/Login";
import Register from "../../src/screen/Register";
import HomeLogin from "../../src/screen/LoginData/HomeLogin";
import ErpScreen from "../../src/screen/LoginData/ErpScreen";
import DeviceDataScreen from "../../src/screen/LoginData/DeviceDataScreen";
import JC from "../../src/screen/LoginData/JC";
import AdminLogin from "../../src/screen/LoginData/AdminLogin"
import AdminView from "../../src/screen/LoginData/AdminView"
import { DataProvider } from "../../src/utils/DataContext"

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <DataProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="HomeLogin" component={HomeLogin} />
          <Stack.Screen name="ErpScreen" component={ErpScreen} />
          <Stack.Screen name="DeviceDataScreen" component={DeviceDataScreen} />
          <Stack.Screen name="JC" component={JC} />
          <Stack.Screen name='AdminLogin' component={AdminLogin} />
          <Stack.Screen name='AdminView' component={AdminView} />

        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default Index;
