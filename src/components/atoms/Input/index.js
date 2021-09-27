import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors, fonts} from '../../../utils';

const Input = ({title, value, onChangeText, secureTextEntry, disable}) => {
  const [border, setBorder] = useState(Colors.border.primary);

  const onFocusForm = () => {
    setBorder(Colors.tertiary);
  };

  const onBlueForm = () => {
    setBorder(Colors.border.primary);
  };

  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlueForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
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
  input: border => ({
    borderColor: border,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
  }),
});
