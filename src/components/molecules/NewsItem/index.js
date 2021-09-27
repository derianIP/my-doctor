import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, fonts} from '../../../utils';

const NewsItem = ({title, date, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{date}</Text>
      </View>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: Colors.border.line,
    borderBottomWidth: 1,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: Colors.text.primary,
    maxWidth: '90%',
    marginBottom: 4,
  },
  subTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: Colors.text.secondary,
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
});
