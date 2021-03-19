import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICAddPhoto, ILPhotoNull} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {Colors, fonts} from '../../utils';

const UploadPhoto = () => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar} source={ILPhotoNull} />
            <ICAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.professional}>Product Designer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" align="center" size={16} />
          <Gap height={64} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
    flex: 1,
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatarWrapper: {
    borderWidth: 1,
    borderColor: Colors.border.primary,
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 0,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: Colors.text.primary,
  },
  professional: {
    fontFamily: fonts.primary.normal,
    fontSize: 18,
    color: Colors.text.secondary,
  },
});
