import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILPhotoNull} from '../../../assets';
import {Colors, fonts, getData} from '../../../utils';

const UserProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILPhotoNull,
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image source={profile.photo} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.title}>{profile.fullName}</Text>
        <Text style={styles.subtitle}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  profile: {
    justifyContent: 'center',
    marginLeft: 12,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: Colors.text.primary,
    textTransform: 'capitalize',
  },
  subtitle: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: Colors.text.secondary,
    textTransform: 'capitalize',
  },
});
