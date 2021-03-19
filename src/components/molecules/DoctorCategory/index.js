import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDoctorUmum} from '../../../assets';
import {Colors, fonts} from '../../../utils';

const DoctorCategory = () => {
  return (
    <View style={styles.container}>
      <ILDoctorUmum />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.professional}>dokter umum</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: Colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  label: {
    marginTop: 28,
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: Colors.text.primary,
  },
  professional: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: Colors.text.primary,
  },
});
