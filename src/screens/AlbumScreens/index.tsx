import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../../context/AuthContext';

export default function AlbumScreen() {
  const {authState, logout} = useContext(AuthContext);
  return (
    <View>
      <Text>Album Screen</Text>
      {authState.isLogin && <Button title="logout" onPress={() => logout()} />}
    </View>
  );
}
