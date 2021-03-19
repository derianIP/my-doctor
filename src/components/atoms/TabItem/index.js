import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICDoctor,
  ICDoctorActive,
  ICHospital,
  ICHospitalActive,
  ICMessage,
  ICMessageActive,
} from '../../../assets';
import {Colors} from '../../../utils';

const TabItem = ({label, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'Doctor') {
      return active ? <ICDoctorActive /> : <ICDoctor />;
    }
    if (label === 'Hospitals') {
      return active ? <ICHospitalActive /> : <ICHospital />;
    }

    if (label === 'Messages') {
      return active ? <ICMessageActive /> : <ICMessage />;
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.label(active)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: active => ({
    color: active ? Colors.text.tabActive : Colors.text.tabNonActive,
  }),
});
