import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props extends DrawerScreenProps<any, any> {}

export default function SettingsScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={{marginTop: insets.top}}>
      <Text>Settings Screen</Text>
      <Button
        title="Volver a home"
        onPress={() => navigation.navigate('StackNavigator')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
