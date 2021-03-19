import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Button, Link, Gap} from '../../components';
import {ILLogo} from '../../assets';
import {Colors, fonts} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input title="Email Address" />
      <Gap height={24} />
      <Input title="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: Colors.white,
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    maxWidth: 153,
    marginVertical: 40,
  },
});
