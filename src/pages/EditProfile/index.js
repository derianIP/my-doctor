import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Colors, getData, storeData} from '../../utils';
import {Fire} from '../../config';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {ILPhotoNull} from '../../assets';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });

  const [photo, setPhoto] = useState(ILPhotoNull);
  const [imageForDB, setImageForDB] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const handleUpdate = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password urang dari 6 karakter',
          type: 'default',
          backgroundColor: Colors.message.error,
          color: Colors.white,
        });
      } else {
        updatePasswod();
        updateProfile();
        navigation.replace('MainApp');
      }
    } else {
      updateProfile();
      navigation.replace('MainApp');
    }
  };

  const updatePasswod = () => {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showMessage({
            message: err.message,
            type: 'default',
            backgroundColor: Colors.message.error,
            color: Colors.white,
          });
        });
      }
    });
  };

  const updateProfile = () => {
    const data = profile;
    data.photo = imageForDB;
    console.log('profile', data);
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        console.log('sukses update');
        storeData('user', data);
      })
      .catch(err => {
        console.log('error update', err);
      });
  };

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
          setPhoto(source);
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile
          isRemove
          icon="remove-photo"
          photo={photo}
          onPress={getImage}
        />
        <View style={styles.contentWrapper}>
          <Input
            title="Full Name"
            value={profile.fullName}
            onChangeText={value => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            title="Pekerjaan"
            value={profile.profession}
            onChangeText={value => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input title="Email Address" value={profile.email} disable />
          <Gap height={24} />
          <Input
            title="Password"
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={handleUpdate} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
  },
  contentWrapper: {
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
});
