import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/AppTheme';

export default function Screen2() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola mundo',
      headerBackTitle: '',
    });
  }, []);
  return (
    <View style={theme.globalMargin}>
      <Text>Screen 2</Text>

      <Button
        title="Ir a Screen 3"
        onPress={() => navigation.navigate('Screen3')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
