import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, Profile, ProfileItem} from '../../components';
import {Colors} from '../../utils';

const DoctorProfile = ({navigation, route}) => {
  const doctor = route.params;
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile
        name={doctor.data.fullName}
        desc={doctor.data.profession}
        // icon="pria"
        photo={{uri: doctor.data.photo}}
      />
      <ProfileItem title="Alumnus" desc={doctor.data.university} />
      <ProfileItem title="Tempat Praktik" desc={doctor.data.hospital_address} />
      <ProfileItem title="No. STR" desc={doctor.data.str_number} />
      <View style={styles.buttonWrapper}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting', doctor)}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  buttonWrapper: {
    marginHorizontal: 40,
    marginBottom: 40,
    marginTop: 23,
  },
});
