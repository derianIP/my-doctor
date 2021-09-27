import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILHospital} from '../../assets';
import {HospitalItem} from '../../components/molecules';
import {Fire} from '../../config';
import {Colors, fonts, showError} from '../../utils';

const Hospitals = () => {
  const [hospital, setHospital] = useState([]);

  useEffect(() => {
    Fire.database()
      .ref('hospital/')
      .once('value')
      .then(res => {
        if (res.val()) {
          setHospital(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={ILHospital} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.subTitle}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.contentWrapper}>
        {hospital.map(item => {
          return (
            <HospitalItem
              key={item.id}
              type={item.type}
              name={item.name}
              address={item.address}
              image={item.image}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 6,
  },
  subTitle: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 22,
    marginTop: -22,
  },
});
