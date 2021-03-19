import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, fonts} from '../../../utils';

const Link = ({title, size, align, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontFamily: fonts.primary[600],
    fontSize: size,
    textAlign: align,
    color: Colors.text.secondary,
    textDecorationLine: 'underline',
  }),
});
