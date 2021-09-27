import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';
import HeaderProfile from './HeaderProfile';
const Header = ({title, onPress, type, desc, photo}) => {
  if (type === 'header-profile') {
    return (
      <HeaderProfile
        title={title}
        desc={desc}
        photo={photo}
        onPress={onPress}
      />
    );
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.title(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingVertical: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: type === 'dark' ? Colors.secondary : Colors.white,
    alignItems: 'center',
    borderBottomStartRadius: type === 'dark' ? 20 : 0,
    borderBottomEndRadius: type === 'dark' ? 20 : 0,
  }),
  title: type => ({
    flex: 1,
    textAlign: 'center',
    color: type === 'dark' ? Colors.white : Colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 20,
  }),
});
