import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({type, title, icon, onPress}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(type)}
      onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    paddingVertical: 10,
    backgroundColor:
      type === 'secondary'
        ? Colors.button.secondary.background
        : Colors.button.primary.background,
    borderRadius: 10,
  }),
  text: type => ({
    fontWeight: '600',
    fontSize: 18,
    color:
      type === 'secondary'
        ? Colors.button.secondary.text
        : Colors.button.primary.text,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
  }),
});
