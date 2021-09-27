import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICMan, ICRemovePhoto, ICWoman} from '../../../assets';
import {Colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const Profile = ({name, desc, icon, photo, isRemove, onPress}) => {
  const Icon = () => {
    switch (icon) {
      case 'remove-photo':
        return <ICRemovePhoto style={styles.removePhoto} />;
      case 'pria':
        return <ICMan style={styles.removePhoto} />;
      case 'wanita':
        return <ICWoman style={styles.removePhoto} />;
      default:
        return false;
    }
  };
  return (
    <View style={styles.profileWrapper}>
      {!isRemove && (
        <View style={styles.pictureWrapper}>
          <Image source={photo} style={styles.picture} />
        </View>
      )}

      {isRemove && (
        <TouchableOpacity
          style={styles.pictureWrapper}
          activeOpacity={0.7}
          onPress={onPress}>
          <Image source={photo} style={styles.picture} />
          <Icon />
        </TouchableOpacity>
      )}

      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Gap height={2} />
          <Text style={styles.profesion}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileWrapper: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  pictureWrapper: {
    width: 130,
    height: 130,
    borderRadius: 130,
    borderColor: Colors.border.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  picture: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: Colors.text.primary,
    textAlign: 'center',
  },
  profesion: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  removePhoto: {
    position: 'absolute',
    right: 1,
    bottom: 8,
  },
});
