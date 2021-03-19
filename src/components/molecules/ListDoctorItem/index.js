import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1} from '../../../assets';
import {Colors} from '../../../utils';

const ListDoctorItem = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Alexander Jannie</Text>
        <Text style={styles.message}>
          Baik ibu, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
  );
};

export default ListDoctorItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.line,
  },
  textWrapper: {
    justifyContent: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
});
