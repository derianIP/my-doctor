import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors, fonts} from '../../../utils';

const Input = ({title}) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: 6,
  },
  input: {
    borderColor: Colors.border.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
  },
});
