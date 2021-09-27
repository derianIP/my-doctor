import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, fonts} from '../../../utils';

const Other = ({text, time, photo}) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.picture} />
      <View>
        <View style={styles.contentWrapper}>
          <Text style={styles.chat}>{text}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginLeft: 16,
    marginBottom: 20,
    flexDirection: 'row',
  },
  contentWrapper: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    maxWidth: '80%',
    backgroundColor: Colors.card,
    padding: 12,
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  chat: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: Colors.white,
  },
  time: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    color: Colors.text.secondary,
  },
  picture: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
});
