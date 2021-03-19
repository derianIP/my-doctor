import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';
const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: Colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
});
