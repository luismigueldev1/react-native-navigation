import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Drawer = createDrawerNavigator();

export const CustomDrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const DrawerContent = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar*/}
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/avatar.gif')} style={styles.avatar} />
      </View>

      {/*Menu*/}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuItemText}> Navegación </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.menuItemText}> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  menuItem: {
    marginBottom: 20,
  },

  menuItemText: {
    fontSize: 18,
  },
});
