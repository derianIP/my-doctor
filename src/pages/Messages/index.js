import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListDoctorItem} from '../../components/molecules';
import {Colors, fonts} from '../../utils';

const Messages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Messages</Text>
        <ListDoctorItem />
        <ListDoctorItem />
        <ListDoctorItem />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  contentWrapper: {
    backgroundColor: Colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: Colors.text.primary,
    marginLeft: 16,
    marginTop: 30,
  },
});
