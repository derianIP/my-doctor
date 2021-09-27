import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const HeaderProfile = ({onPress, title, desc, photo}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Image source={photo} style={styles.picture} />
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  picture: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: Colors.white,
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: Colors.text.headerDesc,
  },
});
