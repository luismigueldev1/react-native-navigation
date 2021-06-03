import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigators/StackNavigator';
import {CustomDrawerNavigator} from './src/navigators/CustomDrawerNavigator';
//import {DrawerNavigator} from './src/navigators/DrawerNavigators';

export default function App() {
  return (
    <NavigationContainer>
      <CustomDrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
