import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PersonaScreen from '../screens/PersonaScreen';

interface PersonaParams {
  id: number;
  name: string;
}

export type RootStackParams = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Persona: PersonaParams;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName="Screen2"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: Colors.white,
        },
      }}>
      <Stack.Screen
        name="Screen1"
        options={{title: 'StackScreen 1'}}
        component={Screen1}
      />
      <Stack.Screen
        name="Screen2"
        options={{title: 'StackScreen 2'}}
        component={Screen2}
      />
      <Stack.Screen
        name="Screen3"
        options={{title: 'StackScreen 3'}}
        component={Screen3}
      />
      <Stack.Screen
        name="Persona"
        options={{title: 'PersonaScreen'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
