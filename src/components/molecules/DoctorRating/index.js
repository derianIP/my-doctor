import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, ICStar} from '../../../assets';
import {Colors, fonts} from '../../../utils';

const DoctorRating = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.professional}>Pediatrician</Text>
      </View>
      <View style={styles.rate}>
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
      </View>
    </View>
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
