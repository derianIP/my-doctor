import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ILPhotoNull} from '../../assets';
import {Header, List, Profile} from '../../components';
import {Fire} from '../../config';
import {Colors, getData} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILPhotoNull,
  });

  const handlerLogout = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: Colors.message.error,
          color: Colors.white,
        });
      });
  };

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.profession}
          photo={profile.photo}
          icon
        />
      )}
      <List
        title="Edit Profile"
        desc="Last update yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        title="Language"
        desc="Available 12 languages"
        type="next"
        icon="language"
      />
      <List
        title="Give Us Rate"
        desc="On Google Play Store"
        type="next"
        icon="give-us"
      />
      <List
        title="Logout"
        desc="logout from app"
        type="next"
        icon="help"
        onPress={handlerLogout}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});
