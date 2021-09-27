import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, fonts} from '../../../utils';

const HospitalItem = ({image, type, name, address}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.picture} />
      <View>
        <Text style={styles.hospitalName}>{type}</Text>
        <Text style={styles.hospitalName}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
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
  },
  address: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: Colors.text.secondary,
  },
});
