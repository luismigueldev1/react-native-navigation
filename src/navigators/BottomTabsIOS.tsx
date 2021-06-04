import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {Colors} from '../theme/AppTheme';
import {Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const IosTab = createBottomTabNavigator();

export const BottomTabsIOS = () => {
  return (
    <IosTab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        style: {
          borderTopColor: Colors.primary,
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: 'white',
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bicycle-outline';
              break;
            case 'Tab2Screen':
              iconName = 'basketball-outline';
              break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <IosTab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <IosTab.Screen
        name="Tab2Screen"
        options={{
          title: 'Tab2',
        }}
        component={TopTabNavigator}
      />
      <IosTab.Screen
        name="StackNavigator"
        options={{
          title: 'Navegación',
        }}
        component={StackNavigator}
      />
    </IosTab.Navigator>
  );
};
