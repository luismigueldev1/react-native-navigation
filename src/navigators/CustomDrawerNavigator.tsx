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
import {Tabs} from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const CustomDrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
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
          style={{
            ...styles.menuItem,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="compass-outline" size={23} color="black" />
          <Text style={styles.menuItemText}> Navegación </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.menuItem,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Settings')}>
          <Icon name="compass-outline" size={23} color="black" />
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
    margin: 30,
  },
  menuItem: {
    marginBottom: 20,
  },

  menuItemText: {
    fontSize: 18,
  },
});
