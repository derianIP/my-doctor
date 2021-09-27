import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = ({value, onChangeText, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Tulis pesan untuk Nairobi"
        style={styles.input}
      />
      <Button
        type="btn-icon-send"
        onPress={onButtonPress}
        disable={value.length < 1}
      />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
  },
  input: {
    backgroundColor: Colors.disable,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontFamily: fonts.primary[400],
    fontSize: 14,
    flex: 1,
    marginRight: 10,
    maxHeight: 45,
  },
});
