import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {RootStackParams} from '../../navigators/StackNavigator';

// interface RouteParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'Persona'> {}

export default function PersonaScreen({route, navigation}: Props) {
  const params = route.params;
  const {setUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  useEffect(() => {
    setUsername(params.name);
  }, []);

  return (
    <View>
      <Text>Pesona Screen</Text>
      <Text> {JSON.stringify(params, null, 3)}</Text>
    </View>
  );
}
