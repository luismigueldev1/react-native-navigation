import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigators/StackNavigator';
import {CustomDrawerNavigator} from './src/navigators/CustomDrawerNavigator';
import {AuthProvider} from './src/context/AuthContext';
//import {DrawerNavigator} from './src/navigators/DrawerNavigators';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CustomDrawerNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
