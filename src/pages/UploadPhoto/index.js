import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {ICAddPhoto, ICRemovePhoto, ILPhotoNull} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {Fire} from '../../config';
import {Colors, fonts, storeData} from '../../utils';

const UploadPhoto = ({navigation, route}) => {
  const [hasUpload, setHasUpload] = useState(false);
  const [avatar, setAvatar] = useState(ILPhotoNull);
  const {fullName, profession, uid} = route.params;
  const [imageForDB, setImageForDB] = useState('');

  const getImage = () => {
    launchImageLibrary(
      {
        includeBase64: true,
        quality: 0.5,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        console.log('response', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Oops, sepertinya anda tidak jadi memilih photo',
            type: 'default',
            backgroundColor: Colors.message.error,
            color: Colors.white,
          });
        } else {
          const source = {uri: response.uri};
          console.log('getImage', response);
          setImageForDB(`data:${response.type};base64, ${response.base64}`);
          setAvatar(source);
          setHasUpload(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({photo: imageForDB});

    const data = route.params;
    data.photo = imageForDB;

    storeData('user', data);

    navigation.replace('MainApp');
  };

  const skipForThis = () => {
    storeData('user', route.params);
    navigation.replace('MainApp');
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image style={styles.avatar} source={avatar} />
            {hasUpload && <ICRemovePhoto style={styles.addPhoto} />}
            {!hasUpload && <ICAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.professional}>{profession}</Text>
        </View>
        <View>
          <Button
            disable={!hasUpload}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={skipForThis}
          />
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
    borderRadius: 110 / 2,
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
