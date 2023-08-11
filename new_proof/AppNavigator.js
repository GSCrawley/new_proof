import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/Splash.jsx';
import LoginScreen from './components/LogIn.jsx';
// import LogOutScreen from'./components/LogOut.jsx';
import ProfileScreen from './components/Profile.jsx';
import RegistrationScreen from './components/Register.jsx';
import SymptomInputScreen from './components/SymptomInput.jsx';
import DiseaseDetailScreen from './components/DiseaseDetails.jsx';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {/* <Stack.Screen name="LogOut" component={LogOutScreen} /> */}
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Splash" component={HomeScreen} />
      <Stack.Screen name="SymptomInput" component={SymptomInputScreen} />
      <Stack.Screen name="DiseaseDetails" component={DiseaseDetailScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
