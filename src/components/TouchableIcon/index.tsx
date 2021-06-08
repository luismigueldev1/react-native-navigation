import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../context/AuthContext';
import {Colors} from '../../theme/AppTheme';

interface Props {
  iconName: string;
}
export default function TouchableIcon({iconName}: Props) {
  const {setFavoriteIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => setFavoriteIcon(iconName)}>
      <Icon name={iconName} size={80} color={Colors.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
