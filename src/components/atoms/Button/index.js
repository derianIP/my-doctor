import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, fonts} from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

const Button = ({type, title, icon, onPress, disable}) => {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} onPress={onPress} />;
  }

  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.textDisable}>{title}</Text>
      </View>
    );
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
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.button.disable.background,
  },
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
  textDisable: {
    fontWeight: '600',
    fontSize: 18,
    color: Colors.button.disable.text,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
  },
});
