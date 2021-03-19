import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyHospital2} from '../../../assets';
import {Colors, fonts} from '../../../utils';

const HospitalItem = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyHospital2} style={styles.picture} />
      <View style={styles.textWrapper}>
        <Text style={styles.hospitalName}>Rumah Sakit Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
};

export default HospitalItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomColor: Colors.border.primary,
    borderBottomWidth: 1,
  },
  picture: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
  },
  hospitalName: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: Colors.text.primary,
    maxWidth: '80%',
  },
  address: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: Colors.text.secondary,
  },
});
