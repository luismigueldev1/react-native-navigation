import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import AlbumScreen from '../screens/AlbumScreens';
import ContactsScreen from '../screens/ContactsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        pressColor: Colors.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: Colors.primary,
        },
        style: {
          elevation: 0,
          shadowColor: 'white',
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Chat':
              iconName = 'chatbox-ellipses-outline';
              break;
            case 'Contacts':
              iconName = 'body-outline';
              break;
            case 'Album':
              iconName = 'albums-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};
