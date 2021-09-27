import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const ProfileItem = ({title, desc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Gap height={6} />
        <Text stule={styles.subTitle}>{desc}</Text>
      </View>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.border.line,
    borderBottomWidth: 1,
    paddingBottom: 16,
    marginBottom: 16,
  },
  contentWrapper: {
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: Colors.text.secondary,
  },
  subTitle: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: Colors.text.primary,
  },
});
