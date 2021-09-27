import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ILDoctorAnak,
  ILDoctorObat,
  ILDoctorPsikeater,
  ILDoctorUmum,
} from '../../../assets';
import {Colors, fonts} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    switch (category) {
      case 'Dokter Umum':
        return <ILDoctorUmum />;
      case 'Dokter Obat':
        return <ILDoctorObat />;
      case 'Psikiater':
        return <ILDoctorPsikeater />;
      case 'Dokter Anak':
        return <ILDoctorAnak />;
      default:
        return <ILDoctorUmum />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.professional}>{category}</Text>
    </TouchableOpacity>
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
    width: 110,
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
