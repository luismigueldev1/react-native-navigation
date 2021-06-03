import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/AppTheme';

interface Props extends StackScreenProps<any, any> {}

export default function Screen3({navigation}: Props) {
  return (
    <View style={theme.globalMargin}>
      <Text>Screen 3</Text>
      <Button title="Ir a Screen 2" onPress={() => navigation.pop()} />
      <Button title="Ir a Screen 1" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({});
