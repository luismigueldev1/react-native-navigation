import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../context/AuthContext';
import {Colors} from '../../theme/AppTheme';

interface Props extends DrawerScreenProps<any, any> {}

export default function SettingsScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();
  const {authState} = useContext(AuthContext);

  return (
    <View style={{marginTop: insets.top}}>
      <Text>Settings Screen</Text>
      <Button
        title="Volver a home"
        onPress={() => navigation.navigate('Tabs')}
      />

      <Text>{JSON.stringify(authState, null, 3)}</Text>

      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon!} color={Colors.primary} size={80} />
      )}
    </View>
  );
}
