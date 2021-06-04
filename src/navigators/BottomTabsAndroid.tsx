import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {Colors} from '../theme/AppTheme';
import {Text} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabsAndroid = () => {
  return (
    <Tab.Navigator
      sceneAnimationEnabled
      barStyle={{
        backgroundColor: Colors.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'Stack';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
      <Tab.Screen name="Stack" component={StackNavigator} />
    </Tab.Navigator>
  );
};
