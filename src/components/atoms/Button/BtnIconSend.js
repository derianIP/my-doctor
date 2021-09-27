import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICSendDark, ICSendLight} from '../../../assets';
import {Colors} from '../../../utils';

const BtnIconSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <ICSendDark />
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <ICSendLight />
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  content: {
    paddingVertical: 8,
  },
  container: disable => ({
    width: 45,
    height: 45,
    backgroundColor: disable ? Colors.disable : Colors.tertiary,
    borderRadius: 10,
    paddingTop: 3,
    paddingHorizontal: 8,
  }),
});
