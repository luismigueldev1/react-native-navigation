import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Tab1Screen() {
  return (
    <View>
      <Text>Tab 1 Screen</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color="#900" />
      </Text>
    </View>
  );
}
