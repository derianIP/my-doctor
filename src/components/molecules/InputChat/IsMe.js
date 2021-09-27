import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, fonts} from '../../../utils';

const IsMe = ({text, time}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.chat}>{text}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginRight: 16,
    marginBottom: 20,
  },
  contentWrapper: {
    borderRadius: 10,
    borderBottomRightRadius: 0,
    maxWidth: '70%',
    backgroundColor: Colors.cardLight,
    padding: 12,
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  chat: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: Colors.text.primary,
  },
  time: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    color: Colors.text.secondary,
  },
});
