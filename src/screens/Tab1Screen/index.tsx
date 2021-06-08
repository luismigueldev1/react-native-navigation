import React from 'react';
import {Text, View} from 'react-native';
import TouchableIcon from '../../components/TouchableIcon';

export default function Tab1Screen() {
  return (
    <View>
      <Text>Tab 1 Screen</Text>

      <TouchableIcon iconName="airplane-outline" />
      <TouchableIcon iconName="attach-outline" />
      <TouchableIcon iconName="bonfire-outline" />
      <TouchableIcon iconName="calculator-outline" />
      <TouchableIcon iconName="images-outline" />
    </View>
  );
}
