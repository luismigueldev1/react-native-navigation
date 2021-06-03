import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../../navigators/StackNavigator';

// interface RouteParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'Persona'> {}

export default function PersonaScreen({route, navigation}: Props) {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View>
      <Text>Pesona Screen</Text>
      <Text> {JSON.stringify(params, null, 3)}</Text>
    </View>
  );
}
