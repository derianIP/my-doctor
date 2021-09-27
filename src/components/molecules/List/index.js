import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICGiveUsRate,
  ICHelp,
  ICLanguage,
  ICNextDark,
  ICProfile,
} from '../../../assets';
import {Colors, fonts} from '../../../utils';

const List = ({profile, title, desc, type, onPress, icon}) => {
  const Icon = () => {
    switch (icon) {
      case 'edit-profile':
        return <ICProfile />;
      case 'language':
        return <ICLanguage />;
      case 'give-us':
        return <ICGiveUsRate />;
      case 'help':
        return <ICHelp />;
      default:
        return <ICProfile />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <ICNextDark />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.line,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWrapper: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 12,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: Colors.text.primary,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: Colors.text.secondary,
    textTransform: 'capitalize',
  },
});
