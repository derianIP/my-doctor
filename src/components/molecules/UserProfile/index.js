import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser1} from '../../../assets';
import {Colors, fonts} from '../../../utils';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.title}>Shayna Melinda</Text>
        <Text style={styles.subtitle}>Product Designer</Text>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  profile: {
    justifyContent: 'center',
    marginLeft: 12,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: Colors.text.primary,
  },
  subtitle: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: Colors.text.secondary,
  },
});
