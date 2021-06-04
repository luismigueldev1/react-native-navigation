import {DrawerScreenProps} from '@react-navigation/drawer';
//import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, theme} from '../../theme/AppTheme';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export default function Screen1({navigation}: Props) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" color={Colors.primary} size={35} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={theme.globalMargin}>
      <Text>Screen 1</Text>
      <Button
        title="Ir a Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />

      <Text>Navegar a persona con propiedades</Text>
      <Button
        title="Ir a pedro"
        onPress={() =>
          navigation.navigate('Persona', {
            id: 1,
            name: 'Pedro',
          })
        }
      />

      <Button
        title="Ir a Maria"
        onPress={() =>
          navigation.navigate('Persona', {
            id: 2,
            name: 'Maria',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
