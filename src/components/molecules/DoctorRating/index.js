import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICStar} from '../../../assets';
import {Colors, fonts} from '../../../utils';

const DoctorRating = ({name, desc, avatar, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.professional}>{desc}</Text>
      </View>
      <View style={styles.rate}>
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
      </View>
    </TouchableOpacity>
  );
};

export default DoctorRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  profile: {
    justifyContent: 'center',
    marginLeft: 12,
    flex: 1,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 2,
  },
  professional: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: Colors.text.secondary,
  },
});
